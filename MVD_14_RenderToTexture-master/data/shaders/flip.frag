#version 330

in vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_screen_texture;

void main(){

	vec3 col = texture(u_screen_texture, v_uv).xyz;
	float mag = col.r+col.g+col.b;
	vec3 bwcol = vec3(mag/3, mag/3, mag/3);

	float screen_xpos = v_uv.x;
	float screen_ypos = v_uv.y;

	if (sin(screen_xpos*20) > 0 == sin(screen_ypos*20) > 0) {
		fragColor = vec4(bwcol, 1.0);
	} else {
		fragColor = vec4(1-bwcol, 1.0);
	}
	
}