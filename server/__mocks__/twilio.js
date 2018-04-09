module.exports = () => ({
  messages: {
    create: ({ to }) => to
      ? Promise.resolve()
      : Promise.reject({ message: "The 'To' number + is not a valid phone number." })
  }});
