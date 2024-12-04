import shuffle from './shuffle';

export const ACTIONS = {
    START_GAME: 'START_GAME',
    CARD_CLICK: 'CARD_CLICK',
    END_GAME: 'END_GAME',
    WIN_GAME: 'WIN_GAME',
    SET_CARDS: 'SET_CARDS',
    RESTART_GAME: 'RESTART_GAME', 
  };

  export const createInitialGameState = () => ({
    characters: [], 
    score: 0,
    highScore: 0,
    isGameStart: false,
    isGameOver: false,
  });
  
  export function gameReducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_CARDS:
        return {
          ...state,
          characters: action.payload,
        };
  
      case ACTIONS.START_GAME:
        return {
          ...state,
          isGameStart: true,
          isGameOver: false,
          score: 0,
          characters: shuffle(state.characters).map((char) => ({
            ...char,
            isClicked: false, 
          })),
        };
  
      case ACTIONS.CARD_CLICK: {
        const cardId = action.payload;
        const cardIndex = state.characters.findIndex((card) => card.id === cardId);
        const clickedCard = state.characters[cardIndex];
  
        if (clickedCard.isClicked) {
          return {
            ...state,
            isGameOver: true,
            highScore: Math.max(state.highScore, state.score), 
          };
        }
  
        const updatedCharacters = [...state.characters];
        updatedCharacters[cardIndex] = {
          ...clickedCard,
          isClicked: true,
        };
  
        return {
          ...state,
          characters: shuffle(updatedCharacters),
          score: state.score + 1,
        };
      }
  
      case ACTIONS.END_GAME:
        return {
          ...state,
          isGameStart: false,
          isGameOver: true,
          highScore: Math.max(state.highScore, state.score), 
        };
  
      case ACTIONS.WIN_GAME:
        return {
          ...state,
          isGameOver: true,
          highScore: Math.max(state.highScore, state.score), 
        };
  
      case ACTIONS.RESTART_GAME:
        return {
          ...state,
          isGameStart: false,
          isGameOver: false,
          characters: state.characters.map((char) => ({
            ...char,
            isClicked: false, 
          })),
          score: 0,
        };
  
      default:
        return state;
    }
  }
  