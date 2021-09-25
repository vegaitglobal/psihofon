import {
  scale as scaleLib,
  verticalScale as verticalScaleLib,
  moderateScale as moderateScaleLib,
  moderateVerticalScale as moderateVerticalScaleLib,
} from 'react-native-size-matters';

const WIDTH_FACTOR = 350 / 375;
const HEIGHT_FACTOR = 680 / 812;
const MINUMUM_FONT_SIZE = 12;

export const scale = (width: number) => {
  return Math.round(scaleLib(width) * WIDTH_FACTOR);
};

export const moderateScale = (width: number, factor?: number) => {
  return Math.round(moderateScaleLib(width, factor) * WIDTH_FACTOR);
};

export const verticalScale = (height: number) => {
  return Math.round(verticalScaleLib(height) * HEIGHT_FACTOR);
};

export const moderateVerticalScale = (height: number, factor?: number) => {
  return Math.round(moderateVerticalScaleLib(height, factor) * HEIGHT_FACTOR);
};

export const scaleFont = (fontSize: number) => {
  const newSizeFont = verticalScale(fontSize);
  return newSizeFont >= MINUMUM_FONT_SIZE ? newSizeFont : MINUMUM_FONT_SIZE;
};
