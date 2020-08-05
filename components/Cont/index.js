
import React from 'react'
import PropTypes from 'prop-types';
import css from '../Cronometro/style.scss'


const Cont = props => {
  return (
    <Countdown toDate={new Date("August 7, 2020 22:00:00")}>
      {props => (
        <CountdownDisplay
          days={props.days}
          asDays={props.asDays}
          hours={props.hours}
          minutes={props.minutes}
          seconds={props.seconds}
        />
      )}
    </Countdown>
  );
};

const CountdownDisplay = props => {
  const {  days, asDays, hours, minutes, seconds } = props;

  return (
      <>
                <h3 className={css.seuTempo}>O seu tempo está acabando!</h3>
    <time
className={css.todoCronometro}
      datetime={`P${asDays}DT${hours}H${minutes}M${seconds}S`}
    >
      <div className="CountdownDisplay__days">
      {String(days).padStart(2, 0)} <span>dias</span>
      </div>
      <div className="CountdownDisplay__hours">
        {String(hours).padStart(2, 0)} <span>horas</span>
      </div>
      <div className="CountdownDisplay__minutes">
        {String(minutes).padStart(2, 0)} <span>minutos</span>
      </div>
      <div className="CountdownDisplay__seconds">
        {String(seconds).padStart(2, 0)} <span>segundos</span>
      </div>
  </time>
  </>
  );
};

CountdownDisplay.propTypes = {
  days: PropTypes.number.isRequired,
  asDays: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { now: new Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ now: new Date() });
    }, this.props.intervalDelay);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { now } = this.state;
    const { toDate } = this.props;
    const delta = toDate - now;

    return this.props.children({
      years: Math.floor(delta / 1000 / 60 / 60 / 24 / 30 / 12),
      months: Math.floor((delta / 1000 / 60 / 60 / 24 / 30) % 12),
      days: Math.floor((delta / 1000 / 60 / 60 / 24) % 30),
      hours: Math.floor((delta / 1000 / 60 / 60) % 24),
      minutes: Math.floor((delta / 1000 / 60) % 60),
      seconds: Math.floor((delta / 1000) % 60),
      milliseconds: delta,
      asDays: Math.floor(delta / 1000 / 60 / 60 / 24)
    });
  }
}

Countdown.propTypes = {
  toDate: PropTypes.instanceOf(Date).isRequired,
  intervalDelay: PropTypes.number
};

Countdown.defaultProps = {
  intervalDelay: 1000
};

export default Cont

