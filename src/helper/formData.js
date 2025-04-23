export const formData = (e) => {
    const values = Object.fromEntries(new FormData(e.target))
    return values
}

