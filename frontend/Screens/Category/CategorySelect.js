import React from 'react';

import {
    Radio,
    View,
    Text
} from 'native-base';

const CategorySelect = (props) => {
    return (
        <Radio.Group
      defaultValue="1"
      name="myRadioGroup"
      accessibilityLabel="Pick Category"
    >
      <Radio value="1" my={1}>
        First
      </Radio>
      <Radio value="2" my={1}>
        Second
      </Radio>
      <Radio value="3" my={1}>
        Third
      </Radio>
    </Radio.Group>
    )
}

export default CategorySelect;