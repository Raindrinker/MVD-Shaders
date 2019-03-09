#version 330

in vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_screen_texture;

void main(){

	float screen_xpos = v_uv.x;

	vec2 new_uv = v_uv + vec2(0.0, sin(screen_xpos*30)*0.02);

	vec3 col = texture(u_screen_texture, new_uv).xyz;

	col.r *= 3;
	col.g *= 0.6;
	col.b *= 0.2;

	fragColor = vec4(col, 1.0);
}