// export default function withAuth(handler: any) {
//   return async (req, res) => {
//     // Implement authentication check (e.g., check for a token in cookies or session)
//     if (!isAuthenticated(req)) {
//       return res.status(401).redirect('/login'); // Redirect to login on failure
//     }

//     return handler(req, res); // Pass through if authenticated
//   };
// }
