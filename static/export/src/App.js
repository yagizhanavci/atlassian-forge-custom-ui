import Spinner from "@atlaskit/spinner";
import { invoke } from "@forge/bridge";
import React, { Fragment, useEffect, useState } from "react";
import { ToLocalDateTime } from "./Helpers";
import { Card, LoadingContainer, ScrollContainer } from "./Styles";

function App() {
  const [isFetched, setFetched] = useState(false);
  const [isFetching, setFetching] = useState(true);
  const [changelog, setChangelog] = useState([]);
  const [downloadUri, setDownloadUri] = useState("");

  if (!isFetched) {
    invoke("get-all").then((changelog) => {
      console.log("changelog", changelog);
      setFetched(true);
      setChangelog(changelog);
      setFetching(false);
    });
  }

  useEffect(() => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      changelog
        .map((log) => {
          return `${log.author.displayName} ${ToLocalDateTime(
            log.created.toString(),
          )} ${log.items[0].field} ${log.items[0].fromString || "-"} ${
            log.items[0].toString
          }`;
        })
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    setDownloadUri(encodedUri);
  }, [changelog]);

  useEffect(() => {
    console.log("downloadUri", downloadUri);
  }, [downloadUri]);

  if (isFetching)
    return (
      <Card>
        <LoadingContainer>
          <Spinner size="large" />
        </LoadingContainer>
      </Card>
    );

  return (
    <Card>
      <ScrollContainer>
        {changelog.length > 0 && downloadUri !== "" ? (
          <Fragment>
            <p>Your data is ready</p>
            <a href={downloadUri} download="data.csv">
              Download Data
            </a>
          </Fragment>
        ) : (
          <p>No data found.</p>
        )}
      </ScrollContainer>
    </Card>
  );
}

export default App;
