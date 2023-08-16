#pragma once
#include <GLFW/glfw3.h>
#include "Utils.h"

class GraphicDrawer
{
public:
	static void Draw()
	{
		DrawCoordinateSystem();
		DrawParabola(2, -3, -8, -2, 3);
	}
private:
	static void DrawCoordinateSystem()
	{
		Utils::DrawLine(Vector2d{ 0, -10 }, Vector2d{ 0, 10 });
		Utils::DrawLine(Vector2d{ -10, 0 }, Vector2d{ 10, 0 });

		Utils::DrawTriangle(
			Vector2d{ 10, 0 },
			Vector2d{ 9.85, 0.15 },
			Vector2d{ 9.85, -0.15 }
		);

		Utils::DrawTriangle(
			Vector2d{ 0, 10 },
			Vector2d{ 0.15, 9.85 },
			Vector2d{ -0.15, 9.85 }
		);

		DrawCoordinatesCell();
	}

	static void DrawParabola(double a, double b, double c, double startX, double endX)
	{
		glBegin(GL_LINE_STRIP);
		for (double i = startX; i <= endX; i += 0.1)
		{
			double y = a * i * i + b * i + c;
			glVertex2d(i, y);
		}
		glEnd();
	}

	static void DrawCoordinatesCell()
	{
		for (unsigned int i = 0; i < 10; i++)
		{
			Utils::DrawLine(Vector2d{ (double)i, -0.25 }, Vector2d{ (double)i, 0.25 });
			Utils::DrawLine(Vector2d{ -(double)i, -0.25 }, Vector2d{ -(double)i, 0.25 });
			Utils::DrawLine(Vector2d{ -0.25, (double)i }, Vector2d{ 0.25, (double)i });
			Utils::DrawLine(Vector2d{ -0.25, -(double)i }, Vector2d{ 0.25, -(double)i });
		}
	}
};

