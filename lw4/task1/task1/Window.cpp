#include "pch.h"
#include <iostream>
#include "Window.h"
#include "DirectLight.h"

namespace
{
	// ���� ������ �� ���������
	constexpr double FIELD_OF_VIEW = 60 * M_PI / 180.0;

	constexpr double CUBOCTAHEDRON_SIZE = 1;

	constexpr double Z_NEAR = 0.1;
	constexpr double Z_FAR = 10;

	// ������������� ������� 4*4 (��� ������ ���� �������� �������)
	glm::dmat4x4 Orthonormalize(const glm::dmat4x4& m)
	{
		// ��������� ���������� 3*3 �� ������� m � ������������� �
		const auto normalizedMatrix = glm::orthonormalize(glm::dmat3x3{ m });
		// �������� 3 ������� �������� �������
		return {
			glm::dvec4{ normalizedMatrix[0], 0.0 },
			glm::dvec4{ normalizedMatrix[1], 0.0 },
			glm::dvec4{ normalizedMatrix[2], 0.0 },
			m[3]
		};
	}

} // namespace

Window::Window(int w, int h, const char* title)
	: BaseWindow(w, h, title)
	, m_cuboctahedron(CUBOCTAHEDRON_SIZE)
{
	m_cuboctahedron.SetSideColor(CuboctahedronSide::FRONT_TOP_TRIANGLE, 0, 0, 0);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::FRONT_BOTTOM_TRIANGLE, 0, 0, 255);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::FRONT_LEFT_RECT, 0, 255, 0);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::FRONT_RIGHT_RECT, 0, 255, 255);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::BACK_TOP_TRIANGLE, 255, 0, 0);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::BACK_BOTTOM_TRIANGLE, 255, 0, 255);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::BACK_LEFT_RECT, 255, 255, 0);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::BACK_RIGHT_RECT, 255, 255, 255);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::MIDDLE_BOTTOM_RECT, 0, 0, 128);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::MIDDLE_TOP_RECT, 0, 128, 0);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::MIDDLE_LEFT_TOP_TRIANGLE, 0, 128, 128);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::MIDDLE_LEFT_BOTTOM_TRIANGLE, 128, 0, 0);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::MIDDLE_RIGHT_TOP_TRIANGLE, 128, 0, 128);
	m_cuboctahedron.SetSideColor(CuboctahedronSide::MIDDLE_RIGHT_BOTTOM_TRIANGLE, 128, 128, 0);
	//m_cube.SetSideColor(CubeSide::NEGATIVE_X, 255, 0, 0);
	//m_cube.SetSideColor(CubeSide::POSITIVE_X, 0, 255, 0);
	//m_cube.SetSideColor(CubeSide::NEGATIVE_Y, 0, 0, 255);
	//m_cube.SetSideColor(CubeSide::POSITIVE_Y, 255, 255, 0);
	//m_cube.SetSideColor(CubeSide::NEGATIVE_Z, 0, 255, 255);
	//m_cube.SetSideColor(CubeSide::POSITIVE_Z, 255, 0, 255);
}

void Window::OnMouseButton(int button, int action, int mods)
{
	if (button == GLFW_MOUSE_BUTTON_1)
	{
		m_leftButtonPressed = (action & GLFW_PRESS) != 0;
	}
}

void Window::OnMouseMove(double x, double y)
{
	const glm::dvec2 mousePos{ x, y };
	if (m_leftButtonPressed)
	{
		const auto windowSize = GetFramebufferSize();

		const auto mouseDelta = mousePos - m_mousePos;
		const double xAngle = mouseDelta.y * M_PI / windowSize.y;
		const double yAngle = mouseDelta.x * M_PI / windowSize.x;
		RotateCamera(xAngle, yAngle);
	}
	m_mousePos = mousePos;
}

void Window::OnScroll(double xoffset, double yoffset)
{
	const glm::dvec3 scale = yoffset > 0
		? glm::dvec3{ 1.1, 1.1, 1.1 }
	: glm::dvec3{ 0.9, 0.9, 0.9 };
	m_cameraMatrix = glm::scale(m_cameraMatrix, scale);
}


// ������� ������ ������ ������ ���������
void Window::RotateCamera(double xAngleRadians, double yAngleRadians)
{
	// ��������� �� 1 � 2 ������ ������� ������ ����������� ���� ��������,
	// ����������� � ��������� ����� X � Y.
	// ������ ������, ��� ����� ���� ��������� ������� �� �������� ������� ������, �� ��� ���
	// ������� ������ �����������������, ���������� ��������������� � ���������� 3*3
	const glm::dvec3 xAxis{
		m_cameraMatrix[0][0], m_cameraMatrix[1][0], m_cameraMatrix[2][0]
	};
	const glm::dvec3 yAxis{
		m_cameraMatrix[0][1], m_cameraMatrix[1][1], m_cameraMatrix[2][1]
	};
	m_cameraMatrix = glm::rotate(m_cameraMatrix, xAngleRadians, xAxis);
	m_cameraMatrix = glm::rotate(m_cameraMatrix, yAngleRadians, yAxis);
}

void Window::OnResize(int width, int height)
{
	glViewport(0, 0, width, height);

	// ��������� ����������� ������ ���������� ������� ����
	double aspect = double(width) / double(height);

	glMatrixMode(GL_PROJECTION);
	const auto proj = glm::perspective(FIELD_OF_VIEW, aspect, Z_NEAR, Z_FAR);
	glLoadMatrixd(&proj[0][0]);
	glMatrixMode(GL_MODELVIEW);
}

void Window::OnRunStart()
{
	DirectLight light{ { -0.0f, 0.0f, 1.0f } };
	light.SetDiffuseIntensity({ 0.5f, 0.5f, 0.5f, 1.0f });
	light.SetAmbientIntensity({ 0.2f, 0.2f, 0.2f, 1.0f });
	light.SetSpecularIntensity({ 0.3f, 0.3f, 0.3f, 1.0f });
	light.Apply(GL_LIGHT0);

	glEnable(GL_LIGHTING);
	glEnable(GL_LIGHT0);

	// �������� ����� ���������� ������
	glEnable(GL_CULL_FACE);
	// ��������������� ����� ��������� ������� ������
	glCullFace(GL_BACK);
	// ������� ��������� ��������� �������, ���� ��� �� ���������
	// ����� ������ �������������� ������ ������� �������
	glFrontFace(GL_CCW);

	// �������� ���� ������� ��� �������� ��������� ����� � ������������
	glEnable(GL_DEPTH_TEST);
}

void Window::Draw(int width, int height)
{
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	SetupCameraMatrix();

	glEnable(GL_COLOR_MATERIAL);
	// ���� ������� ����� ���������� ��������� � ���������� ������������ ���������
	glColorMaterial(GL_FRONT, GL_AMBIENT_AND_DIFFUSE);

	glMaterialfv(GL_FRONT, GL_SPECULAR, glm::value_ptr(glm::vec4{ 0.3f, 0.3f, 0.3f, 1.0f }));

	m_cuboctahedron.Draw();
}

void Window::SetupCameraMatrix()
{
	glMatrixMode(GL_MODELVIEW);
	glLoadMatrixd(&m_cameraMatrix[0][0]);
}
