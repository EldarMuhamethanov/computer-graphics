#pragma once
#include <vector>

enum class CuboctahedronSide
{
	FRONT_TOP_TRIANGLE,
	FRONT_BOTTOM_TRIANGLE,
	FRONT_LEFT_RECT,
	FRONT_RIGHT_RECT,

	BACK_TOP_TRIANGLE,
	BACK_BOTTOM_TRIANGLE,
	BACK_LEFT_RECT,
	BACK_RIGHT_RECT,

	MIDDLE_BOTTOM_RECT,
	MIDDLE_TOP_RECT,

	MIDDLE_LEFT_TOP_TRIANGLE,
	MIDDLE_LEFT_BOTTOM_TRIANGLE,
	MIDDLE_RIGHT_TOP_TRIANGLE,
	MIDDLE_RIGHT_BOTTOM_TRIANGLE,
};

class Cuboctahedron
{
public:
	// Создаем куб с заданной длиной стороны
	explicit Cuboctahedron(float size = 1);
	void Draw() const;
	void SetSideColor(CuboctahedronSide side, GLubyte r, GLubyte g, GLubyte b, GLubyte a = 255);

private:
	void DrawPolygon(int glPrimitive, const std::vector<glm::vec3>& vertexes, const unsigned char* color) const;
	float m_size;

	// Цвета сторон куба
	GLubyte m_sideColors[14][4];
};
