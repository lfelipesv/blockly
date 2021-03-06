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
 * @fileoverview Generating Python for environment constant blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.Environment_constants');

goog.require('Blockly.Python');

Blockly.Python.addReservedWords('math,random,Number');

Blockly.Python['env_constant_noindex'] = function(block) {
  // Constants: STATE_DEFAULT, STATE_BACKPASS, STATE_GOALKICK, STATE_CORNERKICK, STATE_PENALTYKICK.
  var CONSTANTS = {
    'ROBOT_SIZE': ['self.robot_size', Blockly.Python.ORDER_MEMBER],
    'MAX_LINEAR_VELOCITY': ['self.max_linear_velocity', Blockly.Python.ORDER_MEMBER]
  };
  var constant = block.getFieldValue('CONSTANT');
  return CONSTANTS[constant];
};

Blockly.Python['env_constant_index'] = function(block) {
  var operator = block.getFieldValue('OP');
  var code;
  var arg = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE);
  switch (operator) {
    case 'FIELD':
      code = 'self.field[' + arg + ']';
      break;
    case 'GOAL':
      code = 'self.goal[' + arg + ']';
      break;
    case 'PENALTY_AREA':
      code = 'self.penalty_area[' + arg + ']';
      break;
    case 'GOAL_AREA':
      code = 'self.goal_area[' + arg + ']';
      break;
  }
  if (arg.length === 0) {
    code = code.replace("[", "").replace("]", "");
  }
  if (code) {
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
};