/*
 * Media queries utility
 */

import {
  css,
} from 'styled-components/macro';

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

const setResolution = (size: number) => 
  (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${size}px) {
      ${css(first, ...interpolations)}
    }`;

export const media = {
  small: setResolution(320),
  medium: setResolution(640),
  large: setResolution(1200),
  xlarge: setResolution(1400),
};
// const sizes = ["small", "medium", "large", "xlarge"];
// Iterate through the sizes and create a media template
// export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
//   (acc, label) => {
//     acc[label] = (first: any, ...interpolations: any[]) => css`
//       @media (min-width: ${sizes[label]}px) {
//         ${css(first, ...interpolations)}
//       }
//     `;

//     return acc;
//   },
//   {} as { [key in keyof typeof sizes]: any },
// );

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
// type MediaFunction = <P extends object>(
//   first:
//     | TemplateStringsArray
//     | CSSObject
//     | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
//   ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
// ) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium`
    display: block
  `}
`;
*/
