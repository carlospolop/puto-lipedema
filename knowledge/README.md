# Lipedema knowledge corpus

`knowledge-base.yaml` is the reviewable source-of-truth for what enters the local retrieval index. Its source groups are ordered from highest-level reviewed material to supporting evidence. Operational logs, failures, prompts, transient work-in-progress, and generated runtime ledgers are excluded.

The source repository remains canonical. Reindexing is incremental by extracted-content hash, so unchanged files do not create duplicate vectors. Agent-generated files enter only after researcher nomination and administrator approval; those decisions are recorded by the Chack runtime.
