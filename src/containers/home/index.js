import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  getAPOD,
  getAPODDate,
  // decrement,
  // decrementAsync
} from '../../modules/counter'
import APODContainer from '../../components/APODContainer';

const Home = props => ( 
      <div>
        <APODContainer props={props} />
        {/*props.photos.map((photo, i) =>
                <img key={i} src={photo.img_src} />
        )*/}
        <h1>Home</h1>
        <p>Count: {props.count}</p>
        <p>Explanation: {props.explanation}</p>
        <p>
          {/*<button onClick={props.increment}>Increment</button>*/}
          <button onClick={props.getAPOD} disabled={props.isIncrementing}>
            Get APOD
          </button>
        </p>
        {/*<p>
          <button onClick={props.getAPODDate} disabled={props.isIncrementing}>
            Get APOD Date
          </button>
        </p>
        <div>Date: {props.date}</div>*/} {/*not returning date from get date btn*/}
        {/*<p>
          <button onClick={props.decrement}>Decrement</button>
          <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
            'Decrement Async / Get Pictures'
          </button>
        </p>*/}

        <p>
          <button onClick={() => props.changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    )

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  explanation: counter.data.explanation,
  title: counter.data.title,
  imgURL: counter.data.url,
  date: counter.data.date,
  photos:counter.photos
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      getAPOD,
      getAPODDate,
      // decrement,
      // decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
