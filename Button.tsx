import * as React from 'react';
import { Component } from 'react';
import {
  ActivityIndicator, Text,
  TouchableOpacity, View
} from 'react-native';
import { useThemeContext } from '~/ui/theme';
import { createStyle } from './ButtonStyles';
import { colors } from './../../theme/default/colors';

export type ButtonProps = {
  title?: string | object;
  spinner?: boolean;
  color?: string;
  textColor?: string;
  spinnerColor?: string;
  disabled?: boolean;
  icon?: Component | Element;
  borderColor?: string;
  borderWidth?: number;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = React.memo(props => {
  const {
    title,
    onPress,
    spinner,
    color,
    spinnerColor,
    textColor,
    disabled,
    icon,
    borderColor,
    borderWidth
  } = props;

  const { s } = useThemeContext(createStyle);

  const { buttonStyle, textStyle, iconStyle } = React.useMemo(() => {
    return {
      buttonStyle: [
        s?.button, {
          backgroundColor: color, borderColor: borderColor, borderWidth: borderWidth
        }
      ],
      textStyle: [
        s?.buttonText, {
          color: textColor
        }
      ],
      iconStyle: [
        !!title? s?.iconPos: null
      ]
    };
  }, [color, disabled, spinner]);

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled || spinner}
      onPress={onPress}>
      {icon&& 
        <View style={iconStyle}>{icon}</View>
      }
      {spinner ? (
        <ActivityIndicator color={spinnerColor} size={"large"}/>
      ) : (
        !!title &&
          <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
});

Button.defaultProps={
  spinner: false,
  color: '#ff8500',
  spinnerColor: colors.white,
  disabled: false,
  textColor: '#fff',
  borderColor: '#fff',
  borderWidth: 0
}

export { Button };
