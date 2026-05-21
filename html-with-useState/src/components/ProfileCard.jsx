import PropTypes from 'prop-types'

function ProfileCard({name, hobbies, callback}) {
    return (
            <div className="profile-card">
                <h3>Name: {name}</h3>
                <ul>
                    {hobbies.map((hobby, index) => <li onClick={() => callback(hobby)} className={hobby} key={index}>{hobby}</li> )}
                </ul>
            </div>
    )
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired
}

export default ProfileCard