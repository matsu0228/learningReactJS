import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import HogeContainer from "../containers/hoge";
import { primaryColor } from "../assets/js/color";

export default class UserList extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      leagueData: {},
      gameList: [],
      isLoadingGame: true
    };
  }
  /*
  async componentDidMount() {
    this._getGameListData();
    const leagueData = await getLeagueData(sportsId, leagueId);
    this.setState({ leagueData }, () => this._getTeamListData());
  }

  async _getGameListData() {
    let gameStartAfter;
    this.setState({ isLoadingGame: true });
    const gettedGameList = await this.state.gameRef
      .limit(ONCE_DISPLAY_LIMIT)
      .startAfter(this.state.gameStartAfter)
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => {
          gameStartAfter = doc;
          return {
            ...doc.data(),
            id: doc.id
          };
        })
      );
    this.setState({
      gameList: [...this.state.gameList, ...gettedGameList],
      gameStartAfter,
      isLoadingGame: false,
      isLoadedAllGame: Boolean(gettedGameList.length !== ONCE_DISPLAY_LIMIT)
    });
  }

  async _getTeamListData() {
    const teamList = await getAllDataFromColectionArray(
      this.state.leagueData.isMatchIndividual
        ? `sportsData/${sportsId}/league/${leagueId}/players`
        : `sportsData/${sportsId}/league/${leagueId}/teams`
    );
    this.setState({ teamList });
  }
  */

  render() {
    const userList = [{ name: "taro" }];
    return (
      <Wrapper>
        <div className="list">
          <h2 className="title">試合情報設定</h2>
          {userList &&
            userList.map((data, index) => {
              return <div key={index}>{data.name}</div>;
            })}
          {/*
          <Link className="addBtn button" to={"/editGame/new"}>
            試合を追加
          </Link>
        </div>
        <div className="list">
          <h2 className="title">
            {leagueData.isMatchIndividual ? "プレイヤー" : "チーム"}情報設定
          </h2>
          {leagueData.isMatchIndividual ? (
            <TeamPlayers isMatchIndividual={true} />
          ) : (
            <React.Fragment>
              {teamList &&
                teamList.map((teamData, index) => {
                  return <TeamListContent teamData={teamData} key={index} />;
                })}
              <Link className="addBtn button" to={"/teams/new"}>
                チームを追加
              </Link>
            </React.Fragment>
          )}
 */}
        </div>
        <HogeContainer />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 24px;
  .title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 24px;
  }
  .list {
    float: left;
    width: 420px;
    margin-right: 40px;
  }
  .more,
  .addBtn {
    width: 100%;
    font-size: 20px;
    padding: 20px 0;
    margin-bottom: 20px;
    display: block;
    text-align: center;
  }
  .button {
    background-color: ${primaryColor};
  }
`;
