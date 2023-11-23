import { connect } from "react-redux"
import { Link } from "react-router-dom"

const Card = ({ question, author, hasVoted }) => {
    const calcPercentage = (option, question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / numberVotesTotal * 100 + " %"
            case "optionTwo":
                return question.optionTwo.votes.length / numberVotesTotal * 100 + " %"
            default:
                return ""
        }
    }

    return (
        <div className="card" style={{ textAlign: 'center', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            {
                hasVoted ?
                    <div className="card-header bg-success text-white">
                        Voted: {question.optionOne.votes.length + question.optionTwo.votes.length}
                    </div>
                    :
                    <div className="card-header bg-info text-dark">
                        New Question
                    </div>
            }
            <img src={author?.avatarURL} style={{ height: '50px', width: '50px', marginTop: '10px' }} className="card-img-top" alt="Author" />
            <h5 className="card-title">{question.author}</h5>
            <div className="row card-body">
                <div className="col-6">
                    <p className="font-bold mb-2">{question.optionOne.text}</p>
                    <p style={{ margin: '0px' , color: 'red'}}>Votes: {question.optionOne.votes.length} ({calcPercentage("optionOne", question)})</p>
                </div>
                <div className="col-6">
                    <p className="font-bold mb-2">{question.optionTwo.text}</p>
                    <p style={{ margin: '0px' , color: 'red' }}>Votes: {question.optionTwo.votes.length} ({calcPercentage("optionTwo", question)})</p>
                </div>
                <p className="fw-light">{new Date(question.timestamp).toDateString()}</p>
                <Link to={'questions/' + question.id}>
                    {
                        hasVoted ?
                            <button className="btn btn-primary">Show</button>
                            :
                            <button className="btn btn-primary">Vote</button>
                    }
                </Link>
            </div>
        </div>

    );
}

export default connect()(Card)
