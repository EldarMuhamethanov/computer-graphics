#pragma once
#include "Utils.h"
#include <vector>

int Factorial(int x) {
	if (x > 1)
		return x * Factorial(x - 1);
	else
		return 1;
}

int BinomialCoefficiant(int n, int k)
{
	return Factorial(n) / (Factorial(k) * Factorial(n - k));
}

class BezierCurve {
public:
	void RegisterPoint(float x, float y) {
		points.push_back(Vector2f{ x,y });
	}

	void ClearPoints() {
		points.clear();
	}

	std::vector<Vector2f> GetCurve() {
		std::vector<Vector2f> curvePoints;

		float curveLength = 0.0f;
		for (unsigned int i = 0; i < points.size() - 1; i++)
		{
			curveLength += (float)abs(sqrt(pow(points[i + 1].x - points[i].x, 2) + pow(points[i + 1].y - points[i].y, 2)));
		}
		float accuracy = 1.0f;
		float currentPoint = 0.0f;

		while (currentPoint < curveLength)
		{
			float t = currentPoint / curveLength;

			int n = points.size() - 1;
			Vector2f point = { 0.0f, 0.0f };

			for (int i = 0; i <= n; i++)
			{
				float coefficient = (float)(BinomialCoefficiant(n, i) * pow(1 - t, n - i) * pow(t, i));
				point.x += coefficient * points[i].x;
				point.y += coefficient * points[i].y;
			}

			curvePoints.push_back(point);
			currentPoint += accuracy;
		}
		return curvePoints;
	}

public:
	std::vector<Vector2f> points;
};
