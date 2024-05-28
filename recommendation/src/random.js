// src/components/TensorFlowModel.js
import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Papa from "papaparse";

const TensorFlowModel = () => {
  const [mse, setMse] = useState(null);

  const loadCSV = async (url) => {
    const response = await fetch(url);
    const data = await response.text();
    const parsed = Papa.parse(data, { header: true });
    return parsed.data;
  };

  const preprocessData = (data) => {
    const features = [];
    const targets = [];
    data.forEach((row) => {
      const { source, destination, means, cost, ...featuresRow } = row;
      features.push(Object.values(featuresRow).map(Number));
      targets.push([Number(means), Number(cost)]);
    });
    return { features: tf.tensor2d(features), targets: tf.tensor2d(targets) };
  };

  const trainModel = async () => {
    const dataUrl = "/path/to/ujire.csv"; // Adjust the path as needed
    const rawData = await loadCSV(dataUrl);
    const { features, targets } = preprocessData(rawData);

    // Split data into training and testing sets
    const trainSize = Math.floor(0.8 * features.shape[0]);
    const [X_train, X_test] = tf.split(features, [
      trainSize,
      features.shape[0] - trainSize,
    ]);
    const [y_train, y_test] = tf.split(targets, [
      trainSize,
      targets.shape[0] - trainSize,
    ]);

    // Define the model
    const model = tf.sequential();
    model.add(
      tf.layers.dense({
        inputShape: [X_train.shape[1]],
        units: 100,
        activation: "relu",
      })
    );
    model.add(tf.layers.dense({ units: 100, activation: "relu" }));
    model.add(tf.layers.dense({ units: 2 }));

    // Compile the model
    model.compile({ optimizer: "adam", loss: "meanSquaredError" });

    // Train the model
    await model.fit(X_train, y_train, {
      epochs: 50,
      batchSize: 32,
      validationSplit: 0.2,
    });

    // Predict on the testing set
    const y_pred = model.predict(X_test);
    const y_pred_vals = await y_pred.array();
    const y_test_vals = await y_test.array();

    // Evaluate the model
    let mse = 0;
    for (let i = 0; i < y_test_vals.length; i++) {
      mse +=
        (y_test_vals[i][0] - y_pred_vals[i][0]) ** 2 +
        (y_test_vals[i][1] - y_pred_vals[i][1]) ** 2;
    }
    mse /= y_test_vals.length;
    setMse(mse);
  };

  useEffect(() => {
    trainModel();
  }, []);

  return (
    <div>
      <h1>TensorFlow.js Model Training</h1>
      {mse !== null ? <p>Mean Squared Error: {mse}</p> : <p>Loading...</p>}
    </div>
  );
};

export default TensorFlowModel;
