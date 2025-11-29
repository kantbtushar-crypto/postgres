import { Course, SyllabusTopic, Testimonial, FaqItem } from './types';

export const COURSES: Course[] = [
  {
    id: 'l1',
    level: 'L1',
    title: 'PostgreSQL Foundation',
    price: 500,
    description: 'Start your database journey with a solid foundation. Perfect for freshers and students.',
    duration: '2 Weeks (10 Hours)',
    targetAudience: 'Students, Freshers, Non-IT professionals switching careers',
    skills: ['SQL Basics', 'Table Creation', 'CRUD Operations', 'Data Types'],
    color: 'bg-emerald-500',
    features: ['Lifetime Access', 'Certificate of Completion', 'Hindi/English Support']
  },
  {
    id: 'l2',
    level: 'L2',
    title: 'Intermediate Developer',
    price: 1000,
    description: 'Move beyond basics. Master joins, subqueries, and data modeling for real-world apps.',
    duration: '4 Weeks (20 Hours)',
    targetAudience: 'Junior Developers, Backend Engineers, Data Analysts',
    skills: ['Complex Joins', 'Aggregations', 'Constraints', 'Views'],
    color: 'bg-postgres-600',
    features: ['3 Real Projects', 'Interview Prep Guide', 'Code Reviews']
  },
  {
    id: 'l3',
    level: 'L3',
    title: 'Advanced Performance',
    price: 1500,
    description: 'Optimize queries like a pro. Deep dive into indexing and query planning.',
    duration: '6 Weeks (30 Hours)',
    targetAudience: 'Senior Developers, Tech Leads, DBAs',
    skills: ['Indexing Strategy', 'Query Optimization', 'PL/pgSQL', 'Transactions'],
    color: 'bg-indigo-600',
    features: ['Performance Tuning Lab', '1-on-1 Mentorship Call', 'Slack Community']
  },
  {
    id: 'l4',
    level: 'L4',
    title: 'Database Architect Expert',
    price: 2000,
    description: 'Master high availability, replication, and scaling for enterprise systems.',
    duration: '8 Weeks (40 Hours)',
    targetAudience: 'Solutions Architects, Principal Engineers, DevOps',
    skills: ['Replication', 'Partitioning', 'HA Setup', 'Disaster Recovery'],
    color: 'bg-purple-700',
    features: ['Architecture Patterns', 'Cloud Deployment (AWS/Azure)', 'Consultant Certification']
  }
];

export const SYLLABUS: SyllabusTopic[] = [
  // Beginner
  { id: 1, title: 'Introduction to RDBMS', description: 'Understanding Relational Databases, History of PostgreSQL, and Client-Server Architecture.', level: 'Beginner' },
  { id: 2, title: 'Installation & Setup', description: 'Installing PostgreSQL on Windows/Linux/Mac, pgAdmin 4 setup, and first connection.', level: 'Beginner' },
  { id: 3, title: 'Creating Databases', description: 'The CREATE DATABASE command, schema management, and logical structures.', level: 'Beginner' },
  { id: 4, title: 'Basic Data Types', description: 'Integers, Floating-point numbers, Serial types, and basic arithmetic.', level: 'Beginner' },
  { id: 5, title: 'Table Operations', description: 'CREATE, ALTER, and DROP tables. Understanding columns and rows.', level: 'Beginner' },
  { id: 6, title: 'CRUD Essentials', description: 'INSERT, SELECT, UPDATE, DELETE. The core verbs of SQL manipulation.', level: 'Beginner' },
  { id: 7, title: 'Filtering Data', description: 'Using WHERE clauses, logical operators (AND, OR, NOT), and comparison.', level: 'Beginner' },
  { id: 8, title: 'Sorting & Limiting', description: 'ORDER BY, ASC/DESC sorting, LIMIT, and OFFSET for pagination.', level: 'Beginner' },
  { id: 9, title: 'String Functions', description: 'String manipulation: concatenation, substrings, length, and pattern matching (LIKE).', level: 'Beginner' },
  { id: 10, title: 'Date & Time Basics', description: 'Working with TIMESTAMP, DATE, and basic date arithmetic functions.', level: 'Beginner' },
  
  // Intermediate
  { id: 11, title: 'Primary & Foreign Keys', description: 'Enforcing data integrity. Parent-child relationships and referential actions.', level: 'Intermediate' },
  { id: 12, title: 'Check Constraints', description: 'Using CHECK, NOT NULL, and UNIQUE to validate data at the database level.', level: 'Intermediate' },
  { id: 13, title: 'The Power of JOINS', description: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN visualized and explained.', level: 'Intermediate' },
  { id: 14, title: 'Aggregate Functions', description: 'COUNT, SUM, AVG, MIN, MAX. Summarizing data efficiently.', level: 'Intermediate' },
  { id: 15, title: 'GROUP BY & HAVING', description: 'Grouping result sets and filtering based on aggregated values.', level: 'Intermediate' },
  { id: 16, title: 'Subqueries & CTEs', description: 'Writing nested queries and Common Table Expressions (WITH clause) for readable code.', level: 'Intermediate' },
  { id: 17, title: 'JSON in PostgreSQL', description: 'Using JSONB, storing unstructured data, and querying JSON documents efficiently.', level: 'Intermediate' },
  { id: 18, title: 'Views & Materialized Views', description: 'Virtual tables for security and complexity abstraction. Caching data with Materialized Views.', level: 'Intermediate' },
  { id: 19, title: 'Case Expressions', description: 'Conditional logic within queries using CASE WHEN...THEN...ELSE.', level: 'Intermediate' },
  { id: 20, title: 'Set Operations', description: 'UNION, INTERSECT, and EXCEPT. Combining results from multiple queries.', level: 'Intermediate' },

  // Advanced
  { id: 21, title: 'Understanding Indexes', description: 'B-Tree structure, when to index, and the cost of indexing on write operations.', level: 'Advanced' },
  { id: 22, title: 'Advanced Index Types', description: 'GIN, GiST, and BRIN indexes. Full-text search indexing strategies.', level: 'Advanced' },
  { id: 23, title: 'Query Explain & Analyze', description: 'Reading the Query Plan. Understanding sequential scans vs index scans.', level: 'Advanced' },
  { id: 24, title: 'Transactions & ACID', description: 'Atomicity, Consistency, Isolation, Durability. BEGIN, COMMIT, ROLLBACK.', level: 'Advanced' },
  { id: 25, title: 'Concurrency Control', description: 'MVCC (Multi-Version Concurrency Control), locking mechanisms, and isolation levels.', level: 'Advanced' },
  { id: 26, title: 'Stored Procedures', description: 'Writing functions in PL/pgSQL. Variables, loops, and control structures.', level: 'Advanced' },
  { id: 27, title: 'Triggers', description: 'Automating logic on INSERT/UPDATE/DELETE events. Audit logging examples.', level: 'Advanced' },
  { id: 28, title: 'Window Functions', description: 'ROW_NUMBER, RANK, LEAD, LAG. Advanced analytics without collapsing rows.', level: 'Advanced' },
  { id: 29, title: 'Full Text Search', description: 'Lexemes, ranking results, and building a powerful search engine inside Postgres.', level: 'Advanced' },
  { id: 30, title: 'Security & Roles', description: 'Granting permissions (GRANT/REVOKE), Role-based access control (RBAC), and Row Level Security.', level: 'Advanced' },

  // Expert
  { id: 31, title: 'Partitioning Strategies', description: 'Declarative partitioning by Range, List, and Hash. Managing massive datasets.', level: 'Expert' },
  { id: 32, title: 'Write-Ahead Logging (WAL)', description: 'Internal architecture. How WAL ensures durability and enables replication.', level: 'Expert' },
  { id: 33, title: 'Replication Fundamentals', description: 'Streaming replication setup. Primary vs Standby servers.', level: 'Expert' },
  { id: 34, title: 'High Availability (HA)', description: 'Failover strategies, connection pooling with PgBouncer, and load balancing.', level: 'Expert' },
  { id: 35, title: 'Server Configuration', description: 'Tuning postgresql.conf. Memory settings (shared_buffers, work_mem).', level: 'Expert' },
  { id: 36, title: 'Vacuum & Maintenance', description: 'Managing bloat. Configuring Autovacuum for healthy database operations.', level: 'Expert' },
  { id: 37, title: 'Extension Ecosystem', description: 'PostGIS for geospatial, pg_stat_statements for monitoring, and foreign data wrappers.', level: 'Expert' },
  { id: 38, title: 'Backup & Recovery', description: 'pg_dump, pg_restore, and Point-in-Time Recovery (PITR) with WAL archives.', level: 'Expert' },
  { id: 39, title: 'Sharding Concepts', description: 'Horizontal scaling techniques using Citus or manual sharding logic.', level: 'Expert' },
  { id: 40, title: 'Upgrading PostgreSQL', description: 'Strategies for major version upgrades with minimal downtime using pg_upgrade.', level: 'Expert' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Backend Developer',
    company: 'FinTech India',
    content: 'The L2 course completely changed how I write queries. The explanation of Joins was so clear. Best ₹1,000 investment for my career.',
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Data Analyst',
    company: 'E-Comm Startup',
    content: 'I was struggling with slow dashboards. The Advanced course helped me understand Indexing. Now my queries run 10x faster!',
    image: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Student',
    company: 'IIT Bombay',
    content: 'Very affordable compared to other platforms. The book-style syllabus is unique and makes it easy to track what I have learned.',
    image: 'https://picsum.photos/100/100?random=3'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do I get a certificate?",
    answer: "Yes! Every course completion comes with a verifiable digital certificate you can add to LinkedIn."
  },
  {
    question: "Is the content in Hindi or English?",
    answer: "The course materials are in simple English, but we provide support in Hindi/Hinglish for doubt clearance sessions."
  },
  {
    question: "Can I pay via UPI?",
    answer: "Absolutely. We support PhonePe, Google Pay, Paytm, and all major UPI apps, as well as Credit/Debit cards."
  },
  {
    question: "Is there lifetime access?",
    answer: "Yes, once you buy a course, you own the materials forever. You also get all future updates to that level for free."
  }
];