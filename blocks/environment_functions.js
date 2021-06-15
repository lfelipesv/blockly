/**
 * @license
 * Copyright 2012 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Environment function blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.Environment_functions');  // Deprecated
goog.provide('Blockly.Constants.Environment_functions');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Environment_functions.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

// DEEP LEARNING

{
  "type": "num_layers",
  "message0": "%1 number of layers: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "레이어 개수:#",
  "helpUrl": ""
},

{
  "type": "hidden_dim",
  "message0": "%1 number of neurons: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "뉴런 개수:#",
  "helpUrl": ""
},

{
  "type": "ddpg_batch_size",
  "message0": "%1 batch size: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "배치 사이즈:#",
  "helpUrl": ""
},

{
  "type": "ddpg_buffer_size",
  "message0": "1 buffer size: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "버퍼 사이즈:#",
  "helpUrl": ""
},

{
  "type": "dqn_buffer_size",
  "message0": "%1 buffer size: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "버퍼 사이즈:#",
  "helpUrl": ""
},

{
  "type": "ddpg_gamma",
  "message0": "%1 discount factor: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "할인율:#",
  "helpUrl": ""
},

{
  "type": "ddpg_dec_exploration",
  "message0": "%1 decrease exploration until: %2 iterations",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "매 # 반복마다 탐색을 줄입니다",
  "helpUrl": ""
},

{
  "type": "dqn_dec_exploration",
  "message0": "%1 decrease exploration every: %2 iterations",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "매 # 반복마다 탐색을 줄입니다",
  "helpUrl": ""
},

// RULE-BASED

  {
      "type": "distance",
      "message0": "%1 distance between (x1 : %2 y1 : %4) and (x2 : %3 y2 : %5 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y2",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "(x1:# y1:#)과 (x2:# y2:#)간 거리",
      "helpUrl": ""
    },

    {
      "type": "relative_distance",
      "message0": "%1 relative distance between (x1 : %2 y1 : %4) and (x2 : %3 y2 : %5 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y2",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "(x1:# y1:#)과 (x2:# y2:#)간 상대 거리",
      "helpUrl": ""
    },

    {
      "type": "degree2radian",
      "message0": "%1 degree2radian (deg : %2 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "deg",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "각도단위 변환(deg2rad)(도:#)",
      "helpUrl": ""
    },
  
    {
      "type": "radian2degree",
      "message0": "%1 radian2degree (rad : %2 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "rad",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "각도단위 변환(rad2deg)(라디안:#)",
      "helpUrl": ""
    },
  
    {
      "type": "predict_ball",
      "message0": "%1 predicted ball posture after %2 step(s)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "prediction_step",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": null,
      "style": "environment_functions_blocks",
      "tooltip": "# 스탭 후 공 자세 예측",
      "helpUrl": ""
    },
  
    {
      "type": "find_closest_robot",
      "message0": "id of closest robot to the ball",
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "공에 가까운 로봇 개수",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_goal",
      "message0": "%1 %2 is own goal area",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 골 영역에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_penalty",
      "message0": "%1 %2 is own penalty area",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 페널티 영역에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_field",
      "message0": "%1 %2 is own field",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 필드에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_goal",
      "message0": "%1 %2 is opponent's goal area",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 상대팀 골 영역에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_penalty",
      "message0": "%1 %2 is opponent's penalty area",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 상대팀 페널티 영역에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_field",
      "message0": "%1 %2 is opponent's field",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 상대팀 필드에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_gk_zone",
      "message0": "ball is gk zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "공이 골키퍼 존에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_d1_zone",
      "message0": "ball is d1 zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "공이 수비수 1 영역에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_d2_zone",
      "message0": "ball is d2 zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "공이 수비수 2 영역에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_f1_zone",
      "message0": "ball is f1 zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "공이 공격수 1 영역에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_f2_zone",
      "message0": "ball is f2 zone",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "공이 공격수 2 영역에 있습니다",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_default",
      "message0": "game state is default",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "게임 상태가 기본값 입니다",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_goalkick",
      "message0": "game state is goalkick",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "골킥 상태 입니다",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_cornerkick",
      "message0": "game state is cornerkick",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "코너킥 상태 입니다",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_kickoff",
      "message0": "game state is kickoff",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "킥오프 상태 입니다",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_penaltykick",
      "message0": "game state is penaltykick",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "페널티킥 상태 입니다",
      "helpUrl": ""
    },

    {
      "type": "is_closest_to_ball",
      "message0": "%1 %2 is closest to the ball",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 공에 가장 가깝습니다",
      "helpUrl": ""
    },

    {
      "type": "is_close_to_ball",
      "message0": "%1 %2 is close to the ball",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 공에 가장 가깝습니다",
      "helpUrl": ""
    },

    {
      "type": "has_ball_possession",
      "message0": "ball possession",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "공을 가지고 있습니다",
      "helpUrl": ""
    },

    {
      "type": "looking_to_target",
      "message0": "robot looking to target",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "로봇이 목표물을 찾고 있습니다",
      "helpUrl": ""
    },

    {
      "type": "looking_to_ball",
      "message0": "robot looking to ball",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "로봇이 공을 찾고 있습니다",
      "helpUrl": ""
    },

    {
      "type": "looking_to_goal",
      "message0": "robot looking to goal",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "로봇이 골 기회를 찾고 있습니다",
      "helpUrl": ""
    },

    {
      "type": "looking_to_robot",
      "message0": "robot looking to robot",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "로봇이 로봇을 찾고 있습니다",
      "helpUrl": ""
    },

    {
      "type": "is_gk_in_goalcenter",
      "message0": "GK is in goalcenter",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "골키퍼가 골 센터 내에 있습니다",
      "helpUrl": ""
    },

    {
      "type": "robot_in_front_of_ball",
      "message0": "%1 %2 is in front of the ball",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "# 가 공 앞에 있습니다",
      "helpUrl": ""
    },

    {
      "type": "printconsole",
      "message0": "%1 printConsole (message : %2 )",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "message"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_functions_blocks",
      "tooltip": "콘솔 인쇄(메세지: #)",
      "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)
