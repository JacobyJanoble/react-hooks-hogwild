import {useState} from 'react'

const Hog = ({hog}) => {
    const [click, setClick] = useState(false)


    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div onClick={handleClick} className="pigTile">
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.specialty}></img>
            {click ? <p>Speciality: {hog.specialty}</p> : null}
            {click ? <p>Greased: {hog.greased ? "All greased up!" : "None for me, thanks" }</p> : null}
            {click ? <p>Weight: {hog.weight}</p> : null}
            {click ? <p>Highest Medal Achieved : {hog['highest medal achieved']}</p> : null}
        </div>
    )

}


export default Hog;