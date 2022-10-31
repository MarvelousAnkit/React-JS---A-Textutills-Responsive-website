import React, { Component , PropTypes} from 'react';

import CSRFToken from './csrftoken';


class aForm extends Component {
    render() {

        return (
                 <form action="/endpoint" method="post">
                        <CSRFToken />
                        <input type="text" name="name" id="" />
                        <input type="text" name="email" id="" /><br />
                        <button type="submit">Send</button>
                 </form>
        );
    }
}

export default aForm;