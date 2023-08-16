#define _USE_MATH_DEFINES
#include <cmath>
#include <iostream>
#include <GLFW/glfw3.h>
#include <stdexcept>
#include <functional>
#include "Utils.h"
#include "GraphicDrawer.h"


class GLFWInitializer final
{
public:
	GLFWInitializer()
	{
		if (!glfwInit())
		{
			throw std::runtime_error("Failed to initialize GLFW");
		}
	}

	GLFWInitializer(const GLFWInitializer&) = delete;
	GLFWInitializer& operator=(const GLFWInitializer&) = delete;

	~GLFWInitializer()
	{
		glfwTerminate();
	}
};

class BaseWindow
{
public:
	BaseWindow(int w, int h, const char* title)
		: m_window{ CreateWindow(w, h, title) }
	{
		if (!m_window)
		{
			throw std::runtime_error("Failed to create window");
		}
	}
	BaseWindow(const BaseWindow&) = delete;
	BaseWindow& operator=(const BaseWindow&) = delete;

	virtual ~BaseWindow()
	{
		glfwDestroyWindow(m_window);
	}

	void Run()
	{
		glfwMakeContextCurrent(m_window);
		OnRunStart();
		while (!glfwWindowShouldClose(m_window))
		{
			int w, h;
			glfwGetFramebufferSize(m_window, &w, &h);
			Draw(w, h);
			glfwSwapBuffers(m_window);
			glfwPollEvents();
		}
		OnRunEnd();
	}

private:
	virtual void Draw(int width, int height) = 0;

	virtual void OnRunStart() {}
	virtual void OnRunEnd() {}

	static GLFWwindow* CreateWindow(int w, int h, const char* title)
	{
		return glfwCreateWindow(w, h, title, nullptr, nullptr);
	}
	GLFWwindow* m_window;
};

class Window : public BaseWindow
{
public:
	using BaseWindow::BaseWindow;

private:
	void OnRunStart() override
	{
		// ������ ���� ������� ������ �����
		glClearColor(1, 1, 1, 1);
	}

	void Draw(int width, int height) override
	{
		// ����������� ���� ���������
		glViewport(0, 0, width, height);

		SetupProjectionMatrix(width, height);
		glMatrixMode(GL_MODELVIEW);

		glClear(GL_COLOR_BUFFER_BIT);
		glColor3f(0, 0, 0);

		GraphicDrawer::Draw();
	}

	static void SetupProjectionMatrix(int width, int height)
	{
		// ��������� ������� ���������������� �������������� �����, ����� ������� ���������� �������
		// [-1;+1] �� ����� ���� ������ �������� ����� �������� width*height ��������
		glMatrixMode(GL_PROJECTION);
		glLoadIdentity();
		const double aspectRatio = double(width) / double(height);
		double viewWidth = 20.0;
		double viewHeight = viewWidth;
		if (aspectRatio > 1.0)
		{
			viewWidth = viewHeight * aspectRatio;
		}
		else
		{
			viewHeight = viewWidth / aspectRatio;
		}
		glOrtho(-viewWidth * 0.5, viewWidth * 0.5, -viewHeight * 0.5, viewHeight * 0.5, -1.0f, 1.0f);
	}

	static void SetupModelViewMatrix(double phase)
	{
		glMatrixMode(GL_MODELVIEW);
		glLoadIdentity();
		glRotated(phase * 360, 0.0, 0.0, 1.0);
	}
};

int main()
{
	GLFWInitializer initGLFW;
	Window window{ 1920, 1080, "Hello, ellipse" };
	window.Run();
}
