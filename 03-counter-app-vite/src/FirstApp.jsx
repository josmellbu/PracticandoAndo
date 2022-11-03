import PropTypes from 'prop-types'

{/*const mundo = ()=>{return 'Alex'}*/}

export const FirstApp = ({title,subtitle,name}) => {

  //console.log(props)
  

  return (
      <>
        <h1>{ title }</h1>
        {/*<h1>Hola { mundo() }</h1>*/}
        {/*<h1>{ JSON.stringify(newMessage) }</h1>*/}
        <p>{ subtitle }</p>
        <p>{ name }</p>
      </>
    )
}

FirstApp.propTypes={
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo',
  name: 'Alex Josmell'
}