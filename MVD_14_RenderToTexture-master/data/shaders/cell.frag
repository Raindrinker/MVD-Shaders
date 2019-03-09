#version 330

in vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_screen_texture;

void main(){

	float width = 1/800.0;
	float height = 1/600.0;

	vec3 col = texture(u_screen_texture, v_uv).xyz;

	vec2 right_pixel = v_uv + vec2(width, 0.0);
	vec3 col_r = texture(u_screen_texture, right_pixel).xyz;
	vec3 diff_r = abs(col - col_r);

	vec2 left_pixel = v_uv + vec2(-width, 0.0);
	vec3 col_l = texture(u_screen_texture, left_pixel).xyz;
	vec3 diff_l = abs(col - col_l);

	vec2 up_pixel = v_uv + vec2(0.0, height);
	vec3 col_u = texture(u_screen_texture, up_pixel).xyz;
	vec3 diff_u = abs(col - col_u);

	vec2 down_pixel = v_uv + vec2(0.0, -height);
	vec3 col_d = texture(u_screen_texture, down_pixel).xyz;
	vec3 diff_d = abs(col - col_d);

	vec2 right2_pixel = v_uv + vec2(width*2, 0.0);
	vec3 col_r2 = texture(u_screen_texture, right2_pixel).xyz;
	vec3 diff_r2 = abs(col - col_r2);

	vec2 left2_pixel = v_uv + vec2(-width*2, 0.0);
	vec3 col_l2 = texture(u_screen_texture, left2_pixel).xyz;
	vec3 diff_l2 = abs(col - col_l2);

	vec2 up2_pixel = v_uv + vec2(0.0, height*2);
	vec3 col_u2 = texture(u_screen_texture, up2_pixel).xyz;
	vec3 diff_u2 = abs(col - col_u2);

	vec2 down2_pixel = v_uv + vec2(0.0, -height*2);
	vec3 col_d2 = texture(u_screen_texture, down2_pixel).xyz;
	vec3 diff_d2 = abs(col - col_d2);

	vec3 total_diff = diff_r + diff_l + diff_u + diff_d + diff_r2 + diff_l2 + diff_u2 + diff_d2;
	float mag_diff = length(total_diff);

	vec3 border = 1-vec3(mag_diff, mag_diff, mag_diff);

	vec3 poster = floor(col*5.0)/5.0;

	vec3 posterBorder = poster * border;

	fragColor = vec4(posterBorder, 1.0);
}