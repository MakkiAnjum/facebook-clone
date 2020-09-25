/* utilize sessionStorage to achieve authentication persistence. */

// duration is in ms unit.
const SetLocalStore = (key, user, duration) => {
    const now = new Date();
    const item = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        exp: now.getTime() + duration,
    }

    sessionStorage.setItem("curUser", key);
    sessionStorage.setItem(key, JSON.stringify(item));
}

const GetLocalStore = (key) => {
    const item = sessionStorage.getItem(key);
    if (!item) return null;

    const user = JSON.parse(item);
    const now = new Date();
    if (now.getTime() > user.exp) {
        sessionStorage.removeItem(key);
        sessionStorage.removeItem("curUser");
        return null;
    }

    const obj = {
        displayName: user.displayName,
        photoURL: user.photoURL,
    }
    return obj;
}

export { SetLocalStore, GetLocalStore };