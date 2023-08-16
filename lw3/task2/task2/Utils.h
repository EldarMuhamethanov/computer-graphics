#pragma once
#include <GLFW/glfw3.h>

struct Vector2f {
	float x;
	float y;
};

struct Color3f
{
	float r;
	float g;
	float b;
};

class Utils
{
public:
	static Color3f CreateColor(float r, float g, float b)
	{
		return Color3f{ r / 255, g / 255, b / 255 };
	}
	static void DrawRectangle(float x, float y, float width, float height, const Color3f color, float lineWidth = 1.0f, bool isFilled = false)
	{
		Utils::DrawPolygon(
			{
				{x, y},
				{x + width, y},
				{x + width, y + height},
				{x, y + height},
			},
			color,
			lineWidth,
			isFilled
		);
	}

	static void DrawPolygon(std::vector<Vector2f> points, const Color3f color, float lineWidth = 1.0f, bool isFilled = false, bool isClosed = true)
	{
		glLineWidth(lineWidth);
		if (isFilled)
			glBegin(GL_POLYGON);
		else
		{
			if (isClosed)
				glBegin(GL_LINE_LOOP);
			else
				glBegin(GL_LINE_STRIP);
		}

		glColor3f(color.r, color.g, color.b);
		for (auto& point : points)
			glVertex2d(point.x, point.y);
		glEnd();
	}

	static void DrawEllipse(float xCenter, float yCenter, float rx, float ry, float startAngle, float endAngle, const Color3f color, float lineWidth = 1.0f, bool isFilled = false, int points = 360)
	{
		const float step = static_cast<float>(2 * M_PI / points);
		glLineWidth(lineWidth);
		if (isFilled)
			glBegin(GL_TRIANGLE_FAN);
		else
			glBegin(GL_LINE_LOOP);
		glColor3f(color.r, color.g, color.b);
		for (float angle = startAngle; angle <= endAngle; angle += step)
		{
			float a = (fabsf(static_cast<float>(angle - 2 * M_PI)) < 1e-5) ? 0 : angle;
			const float dx = rx * cosf(a);
			const float dy = ry * sinf(a);
			glVertex2f(dx + xCenter, dy + yCenter);
		}
		glEnd();
	}

	static void DrawTriangle(const Vector2f v1, const Vector2f v2, const Vector2f v3)
	{
		glBegin(GL_TRIANGLES);
		glVertex2f(v1.x, v1.y);
		glVertex2f(v2.x, v2.y);
		glVertex2f(v3.x, v3.y);
		glEnd();
	}

	static void DrawLine(const Vector2f v1, const Vector2f v2)
	{
		glBegin(GL_LINE_LOOP);
		glVertex2f(v1.x, v1.y);
		glVertex2f(v2.x, v2.y);
		glEnd();
	}
};

