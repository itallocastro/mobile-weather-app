import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SelectProps {
  options: {label: string; value: string}[];
  leftIcon?: string;
  onChange: (item: {label: string; value: string}) => Promise<void>;
}
const Select: React.FC<SelectProps> = ({options, onChange, leftIcon}) => {
  const [selected, setSelected] = useState<{label: string; value: string}>(
    options[0],
  );

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={options}
      search
      // maxHeight={300}
      // @ts-ignore
      labelField={'label'}
      // @ts-ignore
      valueField={'value'}
      value={selected}
      onChange={async item => {
        setSelected(item);
        await onChange(item);
      }}
      renderLeftIcon={() => {
        return leftIcon ? (
          <MaterialCommunityIcon
            style={styles.icon}
            name={leftIcon}
            size={22}
            color="#284434"
          />
        ) : null;
      }}
    />
  );
};

const styles = StyleSheet.create({
  titleText: {
    color: '#000',
    marginBottom: 5,
  },
  container: {padding: 0},
  dropdown: {
    height: 50,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});


export default Select;