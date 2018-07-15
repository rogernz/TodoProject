export const ONE_PLAYER_PLAY = 'cardGame/ONE_PLAYER_PLAY';

const initialState = {
  playerPlays: [{ name: 'a', scores: [] }],
};

function addOneMoreResult(state, onePlay) {
  return state.playerPlays.map((playerPlay) => {
    if (playerPlay.name === onePlay.name) {
      playerPlay.scores.push(onePlay.score);
      return playerPlay;
    }
    return playerPlay;
  });
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ONE_PLAYER_PLAY:
      return addOneMoreResult(state, action.payload);
    default:
      return state;
  }
};
