export default {
    async fetch(request) {
      return new Response("Hello, world!", {
        headers: { "content-type": "text/plain" },
      });
    },
  };
  