import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { H1, H2, P1, P2 } from './Texts';
import type { I18nTextTranslations } from '@i18n';
import { TextProps } from 'react-native';

const TextObject: any = {
  H1,
  H2,
  P1,
  P2,
};

/**
 * I18nTextProps
 */
type I18nTextProps = TextProps & {
  text: I18nTextTranslations;
  type?: 'H1' | 'H2' | 'P1' | 'P2';

  val?: any;
};

/**
 * I18nText
 */
const I18nText: FC<I18nTextProps> = props => {
  const { text, type = 'P1', val, ...rest } = props;
  const { t } = useTranslation();

  const Component = useMemo(() => TextObject[type], [type]);

  return <Component {...rest}>{t(text, val && { val })}</Component>;
};

export default I18nText;
