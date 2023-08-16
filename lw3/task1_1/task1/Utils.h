#pragma once
#include <GLFW/glfw3.h>

struct Vector2d {
	double x;
	double y;
};


class Utils
{
public:
	static void DrawTriangle(Vector2d v1, Vector2d v2, Vector2d v3)
	{
		glBegin(GL_TRIANGLES);
		glVertex2d(v1.x, v1.y);
		glVertex2d(v2.x, v2.y);
		glVertex2d(v3.x, v3.y);
		glEnd();
	}

	static void DrawLine(Vector2d v1, Vector2d v2)
	{
		glBegin(GL_LINE_LOOP);
		glVertex2d(v1.x, v1.y);
		glVertex2d(v2.x, v2.y);
		glEnd();
	}
};

