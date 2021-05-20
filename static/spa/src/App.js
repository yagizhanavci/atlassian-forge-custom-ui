// Atlaskit
import Avatar from "@atlaskit/avatar";
import Spinner from "@atlaskit/spinner";
import { invoke } from "@forge/bridge";
import React, { useState } from "react";
import { ToLocalDateTime } from "./Helpers";
import {
  Card,
  ChangedField,
  ChangeLog,
  ChangeTime,
  LoadingContainer,
  ScrollContainer,
  User,
  UserName,
} from "./Styles";

function App() {
  const [isFetched, setFetched] = useState(false);
  const [isFetching, setFetching] = useState(true);
  const [changelog, setChangelog] = useState([]);

  if (!isFetched) {
    invoke("get-all").then((changelog) => {
      setFetched(true);
      setChangelog(changelog);
      setFetching(false);
    });
  }

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
        {changelog.length > 0 ? (
          changelog.map((log) => (
            <ChangeLog key={log.id}>
              <User>
                <Avatar
                  appearance="circle"
                  src={log.author.avatarUrls["32x32"]}
                  size="medium"
                />
                <UserName>{log.author.displayName}</UserName>
              </User>
              <ChangeTime>{ToLocalDateTime(log.created.toString())}</ChangeTime>
              <ChangedField>{log.items[0].field}</ChangedField>
              <ChangedField>{log.items[0].fromString || "-"}</ChangedField>
              <ChangedField>{log.items[0].toString}</ChangedField>
            </ChangeLog>
          ))
        ) : (
          <ChangedField>No data found.</ChangedField>
        )}
      </ScrollContainer>
    </Card>
  );
}

export default App;
