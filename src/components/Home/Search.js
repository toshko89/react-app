
export default function Search({ setSeatch }) {

    return (
            <div className="d-flex justify-content-center">
                <div className="col-sm-3 my-1">
                    <input type="number" name="searched" className="form-control" id="inlineFormInputName"
                        placeholder="Search for book by age"
                        onChange={(e) => setSeatch(e.target.value)} />
                </div>
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </div>
    )
}