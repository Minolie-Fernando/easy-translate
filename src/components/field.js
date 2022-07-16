const Field = ({value, onChange}) => {

    return (
        <div className="field">
            <h1>Easy translate</h1>
            <label>Enter word to translate</label>
            <input
                className="input"
                value={value}
                onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default Field;