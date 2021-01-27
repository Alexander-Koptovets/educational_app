import React from 'react'

export class User extends React.Component {
    render() {
        return (
            <div onClick={this.props.user} className='user-wrapper'>
                <table className='user-table'>
                    <tr>
                        <td>
                            {this.props.userName}
                        </td>
                        <td>
                            {this.props.text}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}