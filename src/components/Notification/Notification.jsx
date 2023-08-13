import PropTypes from 'prop-types';
import { NoFeedback } from './Notification.styled';

function Notification ({ message }) {
    return <NoFeedback>{message}</NoFeedback>
}

Notification.propTyres = {
    message: PropTypes.string.isRequired,
}

export { Notification };