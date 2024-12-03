import shuffle from './shuffle';

export const ACTIONS = {
    START_GAME: 'START_GAME',
    CARD_CLICK: 'CARD_CLICK',
    END_GAME: 'END_GAME',
    /* TOGGLE_SOUND: 'TOGGLE_SOUND', */
    WIN_GAME: 'WIN_GAME',
    SET_CARDS: 'SET_CARDS',
    RESTART_GAME: 'RESTART_GAME', // Added for clarity
  };

  export const createInitialGameState = () => ({
    characters: [], // Loaded by SET_CARDS
    score: 0,
    highScore: 0,
    allowSounds: true, // Uncomment to enable
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
          score: 0, // Reset the score
          characters: shuffle(state.characters).map((char) => ({
            ...char,
            isClicked: false, // Reset all characters' isClicked status
          })),
        };
  
      case ACTIONS.CARD_CLICK: {
        const cardId = action.payload;
  
        // Find the clicked card
        const cardIndex = state.characters.findIndex((card) => card.id === cardId);
        const clickedCard = state.characters[cardIndex];
  
        // If already clicked, end the game
        if (clickedCard.isClicked) {
          return {
            ...state,
            isGameOver: true,
            highScore: Math.max(state.highScore, state.score), // Update high score
          };
        }
  
        // Update card as clicked and increment score
        const updatedCharacters = [...state.characters];
        updatedCharacters[cardIndex] = {
          ...clickedCard,
          isClicked: true,
        };
  
        return {
          ...state,
          characters: shuffle(updatedCharacters), // Shuffle after every click
          score: state.score + 1,
        };
      }
  
      case ACTIONS.END_GAME:
        return {
          ...state,
          isGameStart: false,
          isGameOver: true,
          highScore: Math.max(state.highScore, state.score), // Update high score
        };
  
      case ACTIONS.WIN_GAME:
        console.log('WIN_GAME action dispatched')
        return {
          ...state,
          isGameOver: true,
          highScore: Math.max(state.highScore, state.score), // Update high score
        };
  
      case ACTIONS.RESTART_GAME:
        return {
          ...state,
          isGameStart: false,
          isGameOver: false,
          characters: state.characters.map((char) => ({
            ...char,
            isClicked: false, // Reset clicked status
          })),
          score: 0,
        };
  
      /* Uncomment if enabling sound
      case ACTIONS.TOGGLE_SOUND:
        return {
          ...state,
          allowSounds: !state.allowSounds,
        };
      */
  
      default:
        return state;
    }
  }
  