import React from 'react';
import _ from 'lodash';

import Action from './Action2';

export default class SectionActions extends React.Component {
    render() {
        const actions = _.get(this.props, 'actions');
        return _.map(actions, (action, index) => <Action key={index} action={action} />);
    }
}
