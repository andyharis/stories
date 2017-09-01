import _ from 'lodash';

const EDIT_STORY = 'EDIT_STORY';
const CHANGE_STORY = 'CHANGE_STORY';
const NAVIGATION_CHANGE = 'NAVIGATION_CHANGE';

const initialState = {
  navigation: [],
  currentStory: 1,
  nextId: 1,
  stories: [
    {
      id: 0,
      title: 'The beginning',
      text: 'Start your awesome text here!'
    },
    {
      id: 1,
      title: 'Part 1',
      text: 'This is part 1 go ahead!',
      choices: [
        {
          storyId: 2,
          title: 'Kill him!'
        },
        {
          storyId: 3,
          title: 'I am weak...'
        },
      ]
    },
    {
      id: 2,
      title: 'Battle',
      text: 'This is part when you made a choice 1! You died!'
    },
    {
      id: 3,
      title: 'Surrender',
      text: 'This is part when you made a choice 2! You surrendered!',
      choices: [
        {
          storyId: 4,
          title: 'Lie down and rot.'
        },
        {
          storyId: 5,
          title: 'Try to escape!'
        },
      ]
    },
    {
      id: 4,
      title: 'Dying in your cage!',
      text: 'Your choice was 4. You died in your cage.'
    },
    {
      id: 5,
      title: 'Escape in progress',
      text: 'Your choice was 5. You tried to escape. It was successful!'
    },
  ]
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case NAVIGATION_CHANGE:
      return {
        ...state,
        navigation: action.navigation
      }
    case EDIT_STORY:
      return {
        ...state,
        stories: _.set(state.stories, action.chain, action.value)
      }
    case CHANGE_STORY: {
      const nextNavigation = [...state.navigation];
      if (action.appendNavigation)
        nextNavigation.push(action.appendNavigation);
      return {
        ...state,
        currentStory: action.currentStory,
        navigation: nextNavigation
      }
    }
    default:
      return state;
  }
}

export function getStory(id) {
  return (dispatch, store) => {
    const stories = store().story.stories;
    for (let i in stories) {
      const story = stories[i];
      if (story.id == id)
        return story;
    }
    return {};
  }
}

export function getNavigation() {
  return (dispatch, store) => {
    const {story} = store();
    const {navigation, currentStory, stories} = story;
    const navData = [];
    navigation.forEach(nav => navData.push(dispatch(getStory(nav))));
    navData.push(dispatch(getStory(currentStory)));
    return navData;
  }
}

export function editStory(chain, value) {
  return {type: EDIT_STORY, chain, value};
}

export function changeStory(id, appendNavigation = false) {
  return {type: CHANGE_STORY, currentStory: id, appendNavigation};
}

export function navigateToPath(id, navigation) {
  return (dispatch) => {
    dispatch({type: NAVIGATION_CHANGE, navigation});
    dispatch(changeStory(id))
  }
}