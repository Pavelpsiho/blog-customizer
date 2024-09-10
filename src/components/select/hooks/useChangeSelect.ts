import { OptionType } from 'src/constants/articleProps';
import { useState } from 'react';

export const useChangeSelect = (
	initiaValue: OptionType
): [OptionType, (select: OptionType) => void] => {
	const [option, setOpion] = useState<OptionType>(initiaValue);
	function changeOption(select: OptionType) {
		setOpion(select);
	}
	return [option, changeOption];
};
