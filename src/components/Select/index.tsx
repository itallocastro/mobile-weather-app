import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SelectProps {
  options: {label: string; value: string}[];
  leftIcon?: string;
  onChange: (item: {label: string; value: string}) => Promise<void>;
  selected: {label: string; value: string};
}
const Select: React.FC<SelectProps> = ({options, onChange, leftIcon, selected}) => {

  return (
    <Dropdown
      style={styles.dropdown}
      iconColor={'#FFFFFF'}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={options}
      // @ts-ignore
      labelField={'label'}
      // @ts-ignore
      valueField={'value'}
      value={selected}
      onChange={async item => {
        await onChange(item);
      }}
      renderLeftIcon={() => {
        return leftIcon ? (
          <MaterialCommunityIcon
            style={styles.icon}
            name={leftIcon}
            size={28}
            color="#FFFFFF"
          />
        ) : null;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {padding: 0},
  dropdown: {
    height: 50,
    width: '60%',
    borderWidth: 0,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontWeight: '600',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 15,
  },
});


export default Select;