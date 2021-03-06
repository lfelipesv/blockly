var DEFAULT_GK = 
'gk_protection_radius = self.goal_area[Y]/2 - 0.1\n'
+ 'gk_protection_x = math.cos(defense_angle) * gk_protection_radius - self.field[X]/2\n'
+ 'gk_protection_y = math.sin(defense_angle) * gk_protection_radius\n'
+ '\n'
+ 'if helper.is_state_default(game_state):\n'
+ '\n'
+ '    if helper.ball_is_gk_zone(predicted_ball, self.field, self.goal_area):\n'
+ '        if self.action.is_gk_save_possible():\n'
+ '            action = self.action.defend_ball()\n'
+ '        else:\n'
+ '            if helper.has_ball_possession(cur_posture[self.id]):\n'
+ '                action = self.action.cross_to_robot(self.f2_index)\n'
+ '            else:\n'
+ '                if helper.is_gk_in_goalcenter(cur_posture[self.id], self.field):\n'
+ '                    action = self.action.turn_to(0, 0)\n'
+ '                else:\n'
+ '                    action = self.action.go_to(-self.field[X]/2, 0)\n'
+ '    elif helper.ball_is_d1_zone(predicted_ball, self.field, self.penalty_area):\n'
+ '        if self.action.is_gk_save_possible():\n'
+ '            action = self.action.defend_ball()\n'
+ '        else:\n'
+ '            if helper.has_ball_possession(cur_posture[self.id]):\n'
+ '                action = self.action.cross_to_robot(self.f2_index)\n'
+ '            else:\n'
+ '                if helper.is_gk_in_goalcenter(cur_posture[self.id], self.field):\n'
+ '                    action = self.action.turn_to(0, 0)\n'
+ '                else:\n'
+ '                    action = self.action.go_to(-self.field[X]/2, 0)\n'
+ '    elif helper.ball_is_d2_zone(predicted_ball, self.field):\n'
+ '        if self.action.is_gk_save_possible():\n'
+ '            action = self.action.defend_ball()\n'
+ '        else:\n'
+ '            if helper.is_gk_in_goalcenter(cur_posture[self.id], self.field):\n'
+ '                action = self.action.turn_to(0, 0)\n'
+ '            else:\n'
+ '                action = self.action.go_to(-self.field[X]/2, 0)\n'
+ '    elif helper.ball_is_f1_zone(predicted_ball, self.field):\n'
+ '        if self.action.is_gk_save_possible():\n'
+ '            action = self.action.defend_ball()\n'
+ '        else:\n'
+ '            if helper.is_gk_in_goalcenter(cur_posture[self.id], self.field):\n'
+ '                action = self.action.turn_to(0, 0)\n'
+ '            else:\n'
+ '                action = self.action.go_to(-self.field[X]/2, 0)\n'
+ '    else:\n'
+ '        if helper.is_gk_in_goalcenter(cur_posture[self.id], self.field):\n'
+ '            action = self.action.turn_to(0, 0)\n'
+ '        else:\n'
+ '            action = self.action.go_to(-self.field[X]/2, 0)\n'
+ '\n'
+ 'elif helper.is_state_goalkick(game_state):\n'
+ '    if helper.is_close_to_ball(cur_posture[self.id], cur_ball):\n'
+ '        action = self.action.cross_to_robot(self.f2_index)\n'
+ '    else:\n'
+ '        action = self.action.go_to(cur_ball[X], cur_ball[Y])\n'
+ 'else:\n'
+ '    action = self.action.stop()\n';

var DEFAULT_D1 =
'd1_protection_radius = 1.7\n'
+ 'd1_protection_x = math.cos(defense_angle) * d1_protection_radius - self.field[X]/2\n'
+ 'd1_protection_y = math.sin(defense_angle) * d1_protection_radius\n'
+ 'd1_min_x = -self.field[X]/2 + self.goal_area[X] + 0.1\n'
+ '\n'
+ 'if helper.is_state_default(game_state):\n'
+ '\n'
+ '    if helper.ball_is_gk_zone(predicted_ball, self.field, self.goal_area):\n'
+ '        action = self.action.go_to(d1_protection_x, d1_protection_y)\n'
+ '    elif helper.ball_is_d1_zone(predicted_ball, self.field, self.penalty_area):\n'
+ '        if helper.is_closest_to_ball(self.id, idx):\n'
+ '            if helper.has_ball_possession(cur_posture[self.id]):\n'
+ '                self.target_robot_id = self.d2_index\n'
+ '                action = self.action.pass_to_robot(self.target_robot_id)\n'
+ '            else:\n'
+ '                if helper.robot_in_front_of_ball(cur_posture[self.id], predicted_ball):\n'
+ '                    x = -math.cos(defense_angle) * 0.2 + predicted_ball[X]\n'
+ '                    y = -math.sin(defense_angle) * 0.2 + predicted_ball[Y]\n'
+ '                    action = self.action.go_to(x, y)\n'
+ '                else:\n'
+ '                    action = self.action.go_to(max(d1_min_x, predicted_ball[X]), predicted_ball[Y])\n'
+ '        else:\n'
+ '            action = self.action.go_to(d1_protection_x, d1_protection_y)\n'
+ '    elif helper.ball_is_d2_zone(predicted_ball, self.field):\n'
+ '        action = self.action.go_to(d1_protection_x, d1_protection_y)\n'
+ '    elif helper.ball_is_f1_zone(predicted_ball, self.field):\n'
+ '        action = self.action.go_to(d1_protection_x, d1_protection_y)\n'
+ '    else:\n'
+ '        action = self.action.go_to(d1_protection_x, d1_protection_y)\n'
+ '\n'
+ 'else:\n'
+ '    action = self.action.stop()\n';

var DEFAULT_D2 = 
'd2_min_x = -self.field[X]/2 + self.goal_area[X] + 0.1\n'
+ '\n'
+ 'if helper.is_state_default(game_state):\n'
+ '\n'
+ '    if helper.ball_is_gk_zone(predicted_ball, self.field, self.goal_area):\n'
+ '        x = math.cos(defense_angle) * 0.5 + predicted_ball[X]\n'
+ '        y = -self.field[Y]/2 + 0.5\n'
+ '        action = self.action.go_to(x, y)\n'
+ '    elif helper.ball_is_d1_zone(predicted_ball, self.field, self.penalty_area):\n'
+ '        x = math.cos(defense_angle) * 0.5 + predicted_ball[X]\n'
+ '        y = -self.field[Y]/2 + 0.5\n'
+ '        action = self.action.go_to(x, y)\n'
+ '    elif helper.ball_is_d2_zone(predicted_ball, self.field):\n'
+ '        if helper.has_ball_possession(cur_posture[self.id]):\n'
+ '            self.target_robot_id = self.f1_index\n'
+ '            action = self.action.pass_to_robot(self.target_robot_id)\n'
+ '        else:\n'
+ '            if helper.has_ball_possession(cur_posture[self.id]):\n'
+ '                x = -math.cos(defense_angle) * 0.2 + predicted_ball[X]\n'
+ '                y = -math.sin(defense_angle) * 0.2 + predicted_ball[Y]\n'
+ '                action = self.action.go_to(x, y)\n'
+ '            else:\n'
+ '                action = self.action.go_to(max(d2_min_x, predicted_ball[X]), predicted_ball[Y])                        \n'
+ '    elif helper.ball_is_f1_zone(predicted_ball, self.field):\n'
+ '        action = self.action.go_to(math.cos(defense_angle) * 1.5 + predicted_ball[X], -self.field[Y]/2 + 0.5)\n'
+ '    else:\n'
+ '        action = self.action.go_to(-math.cos(attack_angle) * 1.5 + predicted_ball[X], -math.sin(attack_angle) * 1 + predicted_ball[Y])\n'
+ '\n'
+ 'else:\n'
+ '    action = self.action.stop()\n';

var DEFAULT_F1 =
'f1_min_x = -self.field[X]/2 + self.goal_area[X] + 0.1\n'
+ '\n'
+ 'if helper.is_state_default(game_state):\n'
+ '\n'
+ '    if helper.ball_is_gk_zone(predicted_ball, self.field, self.goal_area):\n'
+ '        x = math.cos(defense_angle) * 0.5 + predicted_ball[X]\n'
+ '        y = self.field[Y]/2 - 0.5\n'
+ '        action = self.action.go_to(x, y)\n'
+ '    elif helper.ball_is_d1_zone(predicted_ball, self.field, self.penalty_area):\n'
+ '        x = math.cos(defense_angle) * 0.5 + predicted_ball[X]\n'
+ '        y = self.field[Y]/2 - 0.5\n'
+ '        action = self.action.go_to(x, y)\n'
+ '    elif helper.ball_is_d2_zone(predicted_ball, self.field):\n'
+ '        x = math.cos(defense_angle) * 1.5 + predicted_ball[X]\n'
+ '        y = self.field[Y]/2 - 0.5\n'
+ '        action = self.action.go_to(x, y)\n'
+ '    elif helper.ball_is_f1_zone(predicted_ball, self.field):\n'
+ '        if helper.has_ball_possession(cur_posture[self.id]):\n'
+ '            self.target_robot_id = self.f2_index\n'
+ '            if self.action.is_cross_to_robot_possible(self.target_robot_id):\n'
+ '                action = self.action.cross_to_robot(self.target_robot_id)\n'
+ '            else:\n'
+ '                self.target_robot_id = self.d2_index\n'
+ '                action = self.action.pass_to_robot(self.target_robot_id)\n'
+ '        else:\n'
+ '            if helper.robot_in_front_of_ball(cur_posture[self.id], predicted_ball):\n'
+ '                x = -math.cos(defense_angle) * 0.2 + predicted_ball[X]\n'
+ '                y = -math.sin(defense_angle) * 0.2 + predicted_ball[Y]\n'
+ '                action = self.action.go_to(x, y)\n'
+ '            else:\n'
+ '                action = self.action.go_to(max(f1_min_x, predicted_ball[X]), predicted_ball[Y])\n'
+ '    else:\n'
+ '        action = self.action.go_to(-math.cos(attack_angle) * 1.5 + predicted_ball[X], math.sin(attack_angle) * 1 + predicted_ball[Y])\n'
+ '\n'
+ 'else:\n'
+ '    action = self.action.stop()\n';

var DEFAULT_F2 =
'if helper.is_state_default(game_state):\n'
+ '\n'
+ '    if helper.ball_is_gk_zone(predicted_ball, self.field, self.goal_area):\n'
+ '        action = self.action.go_to(0, 0)\n'
+ '    elif helper.ball_is_d1_zone(predicted_ball, self.field, self.penalty_area):\n'
+ '        action = self.action.go_to(0, 0)\n'
+ '    elif helper.ball_is_d2_zone(predicted_ball, self.field):\n'
+ '        if helper.ball_is_own_field(predicted_ball):\n'
+ '            action = self.action.go_to(0.5, 0)\n'
+ '        else:\n'
+ '            x = self.field[X]/2 - self.penalty_area[X] - 1.0\n'
+ '            action = self.action.go_to(x, 0)\n'
+ '    elif helper.ball_is_f1_zone(predicted_ball, self.field):    \n'
+ '        if helper.ball_is_own_field(predicted_ball):\n'
+ '            action = self.action.go_to(0.5, 0)\n'
+ '        else:\n'
+ '            x = self.field[X]/2 - self.penalty_area[X] - 1.0\n'
+ '            action = self.action.go_to(x, 0)\n'
+ '    else:\n'
+ '        if helper.has_ball_possession(cur_posture[self.id]):\n'
+ '                action = self.action.shoot_to(self.field[X]/2, 0)\n'
+ '        else:\n'
+ '            action = self.action.go_to(cur_ball[X], cur_ball[Y])\n'
+ '\n'
+ 'elif helper.is_state_goalkick(game_state):\n'
+ '    action = self.action.stop()\n'
+ 'elif helper.is_state_cornerkick(game_state):\n'
+ '    if helper.is_close_to_ball(cur_posture[self.id], cur_ball):\n'
+ '        action = self.action.manual_control(0, 0, 7, 5, 0, 0)\n'
+ '    else:\n'
+ '        action = self.action.go_to(cur_ball[X], cur_ball[Y])\n'
+ 'elif helper.is_state_kickoff(game_state):\n'
+ '    if helper.is_close_to_ball(cur_posture[self.id], cur_ball):\n'
+ '        action = self.action.pass_to_robot(self.f1_index)\n'
+ '    else:\n'
+ '        action = self.action.go_to(cur_ball[X], cur_ball[Y])\n'
+ 'elif helper.is_state_penaltykick(game_state):\n'
+ '    if helper.is_close_to_ball(cur_posture[self.id], cur_ball):\n'
+ '        action = self.action.manual_control(1.5, 2.5, 0, 0, 0, 0)\n'
+ '    else:\n'
+ '        action = self.action.go_to(cur_ball[X], cur_ball[Y])\n'
+ 'else:\n'
+ '    action = self.action.stop()\n';