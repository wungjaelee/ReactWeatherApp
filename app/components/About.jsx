var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was
          the JavaScript frame used.
        </li>
        <li>
          <a href="http://openWeathermap.org">Open Weather Map</a> - I used
          Open Weather Map to search for weather data by city name.
        </li>
      </ul>
      <p>Github Link:</p>
      <Link to="https://github.com/wungjaelee/ReactWeatherApp">
        https://github.com/wungjaelee/ReactWeatherApp
      </Link>
    </div>
  )
};
module.exports = About;
