#pragma once
#include <vector>
#include "Utils.h"
#include "BezierCurve.h"

class KarKarychDrawer
{
public:
	static void Draw()
	{

	}

private:
	static void DrawBody()
	{
		DrawLegs();
		Utils::DrawEllipse(500.0f, 500.0f, 280.0f, 280.0f, 0.0f, (float)(2 * M_PI), Utils::CreateColor(0.0f, 102.0f, 172.0f), 1.0f, true);
		Utils::DrawEllipse(500.0f, 500.0f, 280.0f, 280.0f, 0.0f, (float)(2.0f * M_PI), Utils::CreateColor(37.0f, 20.0f, 94.0f), 10.0f, false);
		DrawArms();
		DrawButterfly();
		DrawEyes();
		DrawBeak();
	}

	static void DrawEyes()
	{
		Utils::DrawEllipse(408, 260, 102, 102, 0, (float)(2 * M_PI), Utils::CreateColor(255.0f, 255.0f, 255.0f), 1, true);

		Utils::DrawEllipse(408, 260, 102, 102, (float)(0.85f * M_PI), (float)(1.9 * M_PI), Utils::CreateColor(231.0f, 102.0f, 157.0f), 1, true);
		std::vector<Vector2f> leftEyelidPoints1{
			{316, 307},
			{400, 220},
			{506, 228},
		};
		auto leftEyelidCurve1 = CreateBezier(leftEyelidPoints1);
		Utils::DrawPolygon(
			leftEyelidCurve1,
			Utils::CreateColor(255.0f, 255.0f, 255.0f),
			5,
			true
		);
		Utils::DrawPolygon(
			leftEyelidCurve1,
			Utils::CreateColor(162.0f, 33.0f, 98.0f),
			5.0f,
			false,
			false
		);
		Utils::DrawEllipse(408, 260, 102, 102, 0, (float)(2 * M_PI), Utils::CreateColor(162.0f, 33.0f, 98.0f), 5.0f, false);

		Utils::DrawEllipse(468, 285, 21, 27, 0, (float)(2 * M_PI), Utils::CreateColor(0.0f, 0.0f, 0.0f), 1.0f, true);
		Utils::DrawEllipse(482, 272, 5, 9, 0, (float)(2 * M_PI), Utils::CreateColor(255.0f, 255.0f, 255.0f), 1.0f, true);


		Utils::DrawEllipse(592, 260, 102, 102, 0, (float)(2 * M_PI), Utils::CreateColor(255.0f, 255.0f, 255.0f), 1, true);
		Utils::DrawEllipse(592, 260, 102, 102, (float)(1.1 * M_PI), (float)(2.15 * M_PI), Utils::CreateColor(231.0f, 102.0f, 157.0f), 1, true);
		std::vector<Vector2f> leftEyelidPoints2{
			{684, 307},
			{600, 220},
			{494, 228},
		};
		auto leftEyelidCurve2 = CreateBezier(leftEyelidPoints2);
		Utils::DrawPolygon(
			leftEyelidCurve2,
			Utils::CreateColor(255.0f, 255.0f, 255.0f),
			5,
			true
		);
		Utils::DrawPolygon(
			leftEyelidCurve2,
			Utils::CreateColor(162.0f, 33.0f, 98.0f),
			5.0f,
			false,
			false
		);
		Utils::DrawEllipse(592, 260, 102, 102, 0, (float)(2 * M_PI), Utils::CreateColor(162.0f, 33.0f, 98.0f), 5.0f, false);

		Utils::DrawEllipse(532, 285, 21, 27, 0, (float)(2 * M_PI), Utils::CreateColor(0.0f, 0.0f, 0.0f), 1.0f, true);
		Utils::DrawEllipse(546, 272, 5, 9, 0, (float)(2 * M_PI), Utils::CreateColor(255.0f, 255.0f, 255.0f), 1.0f, true);
	}

	static void DrawButterfly()
	{
		auto curve1 = CreateBezier({
			{500, 595},
			{436, 565},
			{428, 566},
			{423, 576},
			{423, 619},
			{423, 659},
			{423, 673},
			{435, 669},
			{500, 636},
			});
		auto curve2 = CreateBezier({
			{498, 636},
			{565, 669},
			{577, 673},
			{577, 659},
			{577, 619},
			{577, 576},
			{572, 566},
			{564, 565},
			{498, 595},
			});
		Utils::DrawPolygon(
			curve1,
			Utils::CreateColor(37.0f, 20.0f, 94.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			curve2,
			Utils::CreateColor(37.0f, 20.0f, 94.0f),
			1,
			true
		);
	}

	static void DrawLegs()
	{
		std::vector<Vector2f> leftLegPoints1{
			{439, 731},
			{440, 874},
			{430, 890},
			{448, 884},
			{481, 884},
			{510, 900},
			{489, 874},
			{489, 731},
		};

		auto leftLegCurve1 = CreateBezier(leftLegPoints1);
		Utils::DrawPolygon(
			leftLegCurve1,
			Utils::CreateColor(231.0f, 102.0f, 157.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			leftLegCurve1,
			Utils::CreateColor(162.0f, 33.0f, 99.0f),
			5.0f,
			false
		);

		std::vector<Vector2f> leftLegPoints2{
			{440, 770},
			{358, 825},
			{337, 835},
			{354, 843},
			{379, 876},
			{389, 895},
			{400, 877},
			{440, 820},
		};
		auto leftLegCurve2 = CreateBezier(leftLegPoints2);
		Utils::DrawPolygon(
			leftLegCurve2,
			Utils::CreateColor(231.0f, 102.0f, 157.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			leftLegCurve2,
			Utils::CreateColor(162.0f, 33.0f, 99.0f),
			5.0f,
			false
		);

		Utils::DrawRectangle(435, 775, 10, 40, Utils::CreateColor(231.0f, 102.0f, 157.0f), 1.0f, true);

		std::vector<Vector2f> rightLegPoints{
			{561, 731},
			{560, 874},
			{560, 884},
			{552, 884},
			{519, 884},
			{511, 884},
			{511, 874},
			{511, 731},
		};

		auto rightLegCurve = CreateBezier(rightLegPoints);
		Utils::DrawPolygon(
			rightLegCurve,
			Utils::CreateColor(231.0f, 102.0f, 157.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			rightLegCurve,
			Utils::CreateColor(162.0f, 33.0f, 99.0f),
			5.0f,
			false
		);

		std::vector<Vector2f> rightLegPoints2{
			{560, 770},
			{642, 825},
			{663, 835},
			{646, 843},
			{621, 876},
			{611, 895},
			{600, 877},
			{560, 820},
		};
		auto rightLegCurve2 = CreateBezier(rightLegPoints2);
		Utils::DrawPolygon(
			rightLegCurve2,
			Utils::CreateColor(231.0f, 102.0f, 157.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			rightLegCurve2,
			Utils::CreateColor(162.0f, 33.0f, 99.0f),
			5.0f,
			false
		);
		Utils::DrawRectangle(555, 775, 10, 40, Utils::CreateColor(231.0f, 102.0f, 157.0f), 1.0f, true);
	}

	static void DrawArms() {
		std::vector<Vector2f> leftArmPoints{
			Vector2f{240, 376},
			Vector2f{235, 330},
			Vector2f{220, 350},
			Vector2f{100, 466},
			Vector2f{110, 585},
			Vector2f{101, 648},
			Vector2f{191, 657},
			Vector2f{220, 668},
			Vector2f{210, 646},
			Vector2f{240, 376},
		};

		auto leftArmCurve = CreateBezier(leftArmPoints);
		Utils::DrawPolygon(
			leftArmCurve,
			Utils::CreateColor(0.0f, 102.0f, 172.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			leftArmCurve,
			Utils::CreateColor(37.0f, 20.0f, 94.0f),
			5.0f,
			false
		);

		std::vector<Vector2f> rightArmPoints{
			Vector2f{760, 376},
			Vector2f{765, 330},
			Vector2f{780, 350},
			Vector2f{900, 466},
			Vector2f{890, 585},
			Vector2f{899, 648},
			Vector2f{809, 657},
			Vector2f{780, 668},
			Vector2f{790, 646},
			Vector2f{760, 376},
		};

		auto rightArmCurve = CreateBezier(rightArmPoints);
		Utils::DrawPolygon(
			rightArmCurve,
			Utils::CreateColor(0.0f, 102.0f, 172.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			rightArmCurve,
			Utils::CreateColor(37.0f, 20.0f, 94.0f),
			7.0f,
			false
		);
	}

	static void DrawBeak()
	{
		std::vector<Vector2f> leftBeakPoints1{
			{500, 305},
			{461, 300},
			{452, 360},
			{400, 356},
			{332, 355},
			{296, 355},
			{285, 370},
			{289, 429},
			{316, 531},
			{500, 557},
		};
		auto leftBeakCurve1 = CreateBezier(leftBeakPoints1);
		Utils::DrawPolygon(
			leftBeakCurve1,
			Utils::CreateColor(242.0f, 172.0f, 0.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			leftBeakCurve1,
			Utils::CreateColor(227.0f, 105.0f, 19.0f),
			10.0f,
			false,
			false
		);

		std::vector<Vector2f> leftBeakPoints2{
			{500, 305},
			{539, 300},
			{548, 360},
			{600, 356},
			{668, 355},
			{704, 355},
			{715, 370},
			{711, 429},
			{684, 531},
			{498, 557},
		};
		auto leftBeakCurve2 = CreateBezier(leftBeakPoints2);
		Utils::DrawPolygon(
			leftBeakCurve2,
			Utils::CreateColor(242.0f, 172.0f, 0.0f),
			1,
			true
		);
		Utils::DrawPolygon(
			leftBeakCurve2,
			Utils::CreateColor(227.0f, 105.0f, 19.0f),
			10.0f,
			false,
			false
		);

		std::vector<Vector2f> leftBeakPoints3{
			{330, 388},
			{315, 423},
			{345, 432},
			{440, 418},
			{457, 498},
			{500, 496},
		};
		Utils::DrawPolygon(
			CreateBezier(leftBeakPoints3),
			Utils::CreateColor(227.0f, 105.0f, 19.0f),
			7.0f,
			false,
			false
		);
		std::vector<Vector2f> leftBeakPoints4{
			{670, 388},
			{685, 423},
			{655, 432},
			{560, 418},
			{543, 498},
			{500, 496},
		};
		Utils::DrawPolygon(
			CreateBezier(leftBeakPoints4),
			Utils::CreateColor(227.0f, 105.0f, 19.0f),
			7.0f,
			false,
			false
		);
	}
};

