# freezePose
After Effects Scripts for automated keyframe duplication - designed for character animations.

All scripts are headless for instant use on a shortcut or through launcher like KEYboard or KBar.

freezePose cycles through all layers, which are visible, not locked and not shyed and find all properties which have keyframes.
From those properties, the last keyframe on the left side of the CTI will be duplicated to the CTI position. Interpolation and easing is duplicated as well. 

There are 3 options what to do next: (this is work in progress, don't know which approach is the best yet - sorry for the names)

freezePoseLEFT_1:
- last keyframe: left side stays original, right side is set to HOLD
- duplicated keyframe: easing is original on both sides
- new pose can instantly created on duplicated keyframes

![freezePoseLEFT_1](https://github.com/VogelMoritz/freezePose/blob/master/1.jpg?raw=true)



freezePoseLEFT_2:
- last keyframe: left side stays original, right set easing is set to 0 speed and influence
- duplicated keyframe: left side easing is set to 0 speed and influence, right side is set to HOLD
- clearly visible where one pose is holded and a new pose starts



freezePoseLEFT_3:
- last keyframe: left side stays original, right set easing is set to 0 speed and influence
- duplicated keyframe: left side easing is set to 0 speed and influence, right side stays original
- like version 2, but without keyframes on HOLD - maybe more practical this way?
