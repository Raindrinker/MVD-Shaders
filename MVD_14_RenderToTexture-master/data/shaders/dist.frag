#version 330

in vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_screen_texture;

void main(){

	float ar = 600/800.0;

	vec3 col = texture(u_screen_texture, v_uv).xyz;
	float mag = col.r+col.g+col.b;

	float dist_to_tl = 1 - sqrt(length(vec2(0.0, 1.0) - vec2(v_uv.x, v_uv.y*ar)));
	float dist_to_tr = 1 - sqrt(length(vec2(1.0, 1.0) - vec2(v_uv.x, v_uv.y*ar)));
	float dist_to_b = 1 - sqrt(length(vec2(0.5, 0.0) - vec2(v_uv.x, v_uv.y*ar)));

	fragColor = vec4(dist_to_tl*mag, dist_to_tr*mag, dist_to_b*mag, 1.0);
	
}