// yourModule.test.js
import firebase from 'firebase/app';
import 'firebase/database';

jest.mock('firebase/app');
jest.mock('firebase/database');

describe('Firebase Data Fetch and Distance Calculation', () => {
  it('calculates the distance correctly', async () => {
    // Mock Firebase database calls
    const points = {
      point1: { lat: 40.7128, lng: -74.0060 },
      point2: { lat: 34.0522, lng: -118.2437 }
    };

    firebase.database().ref.mockReturnValue({
      once: () => Promise.resolve({ val: () => points })
    });

    // You would import your actual function here
    // For now, I'll just directly use the example function
    const distance = calculateDistance(points.point1, points.point2);

    // Example assertion
    expect(distance).toBeCloseTo(3940, 0); // The distance in km (approximate)
  });

  // Additional tests...
});

// You would also include the calculateDistance function here or import it if it's in a separate module
function calculateDistance(point1, point2) {
  // ... (same as in the original example)
}
