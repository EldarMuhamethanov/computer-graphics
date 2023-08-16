#include "pch.h"
#include "Cuboctahedron.h"
#include <vector>

Cuboctahedron::Cuboctahedron(float size)
	: m_size(size)
{
	SetSideColor(CuboctahedronSide::FRONT_TOP_TRIANGLE, 255, 255, 255);
	SetSideColor(CuboctahedronSide::FRONT_BOTTOM_TRIANGLE, 255, 255, 255);
	SetSideColor(CuboctahedronSide::FRONT_LEFT_RECT, 255, 255, 255);
	SetSideColor(CuboctahedronSide::FRONT_RIGHT_RECT, 255, 255, 255);
	SetSideColor(CuboctahedronSide::BACK_TOP_TRIANGLE, 255, 255, 255);
	SetSideColor(CuboctahedronSide::BACK_BOTTOM_TRIANGLE, 255, 255, 255);
	SetSideColor(CuboctahedronSide::BACK_LEFT_RECT, 255, 255, 255);
	SetSideColor(CuboctahedronSide::BACK_RIGHT_RECT, 255, 255, 255);
	SetSideColor(CuboctahedronSide::MIDDLE_BOTTOM_RECT, 255, 255, 255);
	SetSideColor(CuboctahedronSide::MIDDLE_TOP_RECT, 255, 255, 255);
	SetSideColor(CuboctahedronSide::MIDDLE_LEFT_TOP_TRIANGLE, 255, 255, 255);
	SetSideColor(CuboctahedronSide::MIDDLE_LEFT_BOTTOM_TRIANGLE, 255, 255, 255);
	SetSideColor(CuboctahedronSide::MIDDLE_RIGHT_TOP_TRIANGLE, 255, 255, 255);
	SetSideColor(CuboctahedronSide::MIDDLE_RIGHT_BOTTOM_TRIANGLE, 255, 255, 255);
}

void Cuboctahedron::Draw() const
{
	static constexpr float vertices[12][3] = {
		{ -0.5, -M_SQRT2 / 2, 0.5 }, // 0
		{ -0.5, -M_SQRT2 / 2, -0.5 }, // 1
		{ 0.5, -M_SQRT2 / 2, -0.5 }, // 2
		{ 0.5, -M_SQRT2 / 2, 0.5 }, // 3
		{ -1, 0, 0 }, // 4
		{ 0, 0, -1 }, // 5
		{ 1, 0, 0 }, // 6
		{ 0, 0, 1 }, // 7
		{ -0.5, M_SQRT2 / 2, 0.5 }, // 8
		{ -0.5, M_SQRT2 / 2, -0.5 }, // 9
		{ 0.5, M_SQRT2 / 2, -0.5 }, // 10
		{ 0.5, M_SQRT2 / 2, 0.5 }, // 11
	};

	static std::vector<std::vector<unsigned short>> faces{
		{ 7, 11, 8 },
		{ 7, 0, 3 },
		{ 0, 7, 8, 4},
		{ 3, 6, 11, 7 },

		{ 5, 9, 10 },
		{ 5, 2, 1 },
		{ 1, 4, 9, 5 },
		{ 2, 5, 10, 6 },

		{0, 1, 2, 3},
		{8, 11, 10, 9},

		{4, 8, 9},
		{4, 1, 0},
		{6, 10, 11},
		{6, 3, 2},
	};
	static size_t const faceCount = faces.size();

	for (size_t face = 0; face < faceCount; ++face)
	{
		const std::vector<unsigned short> facePoints = faces[face];
		if (facePoints.size() == 4)
		{
			auto p0 = glm::make_vec3(vertices[facePoints[0]]);
			auto p1 = glm::make_vec3(vertices[facePoints[1]]);
			auto p2 = glm::make_vec3(vertices[facePoints[2]]);
			auto p3 = glm::make_vec3(vertices[facePoints[3]]);
			p0 *= m_size;
			p1 *= m_size;
			p2 *= m_size;
			p3 *= m_size;
			auto v01 = p1 - p0;
			auto v02 = p2 - p0;
			auto normal = glm::normalize(glm::cross(v01, v02));
			glNormal3fv(glm::value_ptr(normal));

			DrawPolygon(GL_QUADS, std::vector<glm::vec3>{ p0, p1, p2, p3 }, m_sideColors[face]);
		}
		else
		{
			auto p0 = glm::make_vec3(vertices[facePoints[0]]);
			auto p1 = glm::make_vec3(vertices[facePoints[1]]);
			auto p2 = glm::make_vec3(vertices[facePoints[2]]);
			p0 *= m_size;
			p1 *= m_size;
			p2 *= m_size;
			auto v01 = p1 - p0;
			auto v02 = p2 - p0;
			auto normal = glm::normalize(glm::cross(v01, v02));
			glNormal3fv(glm::value_ptr(normal));

			DrawPolygon(GL_TRIANGLES, std::vector<glm::vec3>{ p0, p1, p2 }, m_sideColors[face]);
		}
	}
}

void Cuboctahedron::DrawPolygon(int glPrimitive, const std::vector<glm::vec3>& vertexes, const unsigned char* color) const
{
	glColor4ubv(color);
	glBegin(glPrimitive);
	for (unsigned short i = 0; i < vertexes.size(); i++)
	{
		glm::vec3 vec = vertexes[i];
		glVertex3fv(glm::value_ptr(vec));
	}
	glEnd();

	glColor3f(0, 0, 0);
	glLineWidth(3);
	glBegin(GL_LINE_STRIP);
	for (unsigned short i = 0; i < vertexes.size(); i++)
	{
		glm::vec3 vec = vertexes[i];
		glVertex3fv(glm::value_ptr(vec));
	}
	glVertex3fv(glm::value_ptr(vertexes[0]));
	glEnd();
}

void Cuboctahedron::SetSideColor(CuboctahedronSide side, GLubyte r, GLubyte g, GLubyte b, GLubyte a)
{
	int index = static_cast<int>(side);
	m_sideColors[index][0] = r;
	m_sideColors[index][1] = g;
	m_sideColors[index][2] = b;
	m_sideColors[index][3] = a;
}